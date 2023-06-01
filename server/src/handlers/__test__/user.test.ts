import { User } from '@prisma/client'
import { prismaMock } from '../../singleton'
import app from '../../server'
import request from 'supertest'
import { hashPassword } from '../../modules/authentification'

describe('POST /user/register', () => {
  let mockUser: User

  beforeAll(async () => {
    const hashedPassword = await hashPassword('testPassword')

    mockUser = {
      id: '1',
      email: 'test@test.com',
      username: 'testUser',
      createdAt: new Date(),
      password: hashedPassword,
    }
  })

  test('with all required parameters provided correctly', async () => {
    prismaMock.user.create = jest.fn().mockResolvedValue(mockUser);

    const response = await request(app).post('/user/register').send({
      email: 'test@test.com',
      username: 'testUser', 
      password: 'testPassword',
    })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')
  })

  // The rest of your tests...
})
