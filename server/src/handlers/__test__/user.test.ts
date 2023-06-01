import { User } from '@prisma/client'
import { prismaMock } from '../../singleton'
import app from '../../server'
import request from 'supertest'
import * as auth from '../../modules/authentification'

describe('User Test Suites', () => {
  let mockUser: User

  beforeAll(async () => {
    mockUser = {
      id: '1',
      email: 'test@test.com',
      username: 'testUser',
      createdAt: new Date(),
      password: 'testUser9000.',
    }

    process.env.JWT_SECRET = 'cookies'
  })
  describe('POST user/register', () => {
    test('with all required parameters provided correctly', async () => {
      prismaMock.user.create.mockResolvedValue(mockUser)

      const response = await request(app).post('/user/register').send({
        email: 'test@test.com',
        username: 'testUser',
        password: 'testUser9000.',
      })

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('token')
    })

    test('with all good parameters but password not strong', async () => {
      prismaMock.user.create.mockResolvedValue(mockUser)

      const response = await request(app).post('/user/register').send({
        email: 'test@test.com',
        username: 'testUser',
        password: 'testUser9000',
      })

      expect(response.status).toBe(409)
      expect(response.body).toHaveProperty('errors')
    })

    test('with a duplicate username or email', async () => {
      prismaMock.user.create.mockResolvedValueOnce(mockUser)

      const response1 = await request(app).post('/user/register').send({
        email: 'test@test.com',
        username: 'testUser',
        password: 'testUser9000.',
      })
      expect(response1.status).toBe(200)
      expect(response1.body).toHaveProperty('token')

      const response2 = await request(app).post('/user/register').send({
        email: 'test@test.com',
        username: 'testUser',
        password: 'testUser9000.',
      })
      expect(response2.status).toBe(500)
      expect(response2.body).toHaveProperty('message')
    })
  })

  describe('POST user/login', () => {
    test('with valid email and password', async () => {
      prismaMock.user.findUnique.mockResolvedValue(mockUser)
      jest.spyOn(auth, 'comparePasswords').mockResolvedValue(true)

      const response = await request(app).post('/user/login').send({
        email: 'test@test.com',
        password: 'testUser9000.',
      })

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('token')
    })

    test('with invalid email and good password', async () => {
      prismaMock.user.findUnique.mockResolvedValue(null)
      jest.spyOn(auth, 'comparePasswords').mockResolvedValue(true)

      const response = await request(app).post('/user/login').send({
        email: 'test@miam.com',
        password: 'testUser9000.',
      })


      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('message')
    })

    test('with good email and invalid password', async () => {
      prismaMock.user.findUnique.mockResolvedValue(mockUser)
      jest.spyOn(auth, 'comparePasswords').mockResolvedValue(false)

      const response = await request(app).post('/user/login').send({
        email: 'test@test.com',
        password: 'testUser90',
      })


      expect(response.status).toBe(409)
      expect(response.body).toHaveProperty('errors')
    })

    test('with an invalid user', async () => {
      prismaMock.user.findUnique.mockResolvedValue(null)
      jest.spyOn(auth, 'comparePasswords').mockResolvedValue(true)

      const response = await request(app).post('/user/login').send({
        email: 'test@miam.com',
        password: 'testUser9000.',
      })


      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('message')
    })
  })
})
