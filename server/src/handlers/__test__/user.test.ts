import { User } from '@prisma/client'
import { prismaMock } from '../../singleton'
import app from '../../server'
import request from 'supertest'
import { hashPassword } from '../../modules/authentification'

describe('User Test Suites', () => {
  describe('POST user/register', () => {
    let mockUser: User

    beforeAll(async () => {
      const hashedPassword = await hashPassword('testPassword')

      mockUser = {
        id: '1',
        email: 'test@test.com',
        username: 'testUser',
        createdAt: new Date(),
        password: 'testUser9000.',
      }

      process.env.JWT_SECRET = 'cookies'
    })

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
  })
})
