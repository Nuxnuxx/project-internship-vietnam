import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function main() {

  const user = await prisma.user.create({
    data: {
      email: 'nuxnux02290@gmail.com',
      username: 'nuxnux',
      password: 'saucisse',
    }
  })

  console.log(user)

  const userFound = await prisma.user.findFirst({
    where: {
      username: 'nuxnux'
    }
  })

  console.log(userFound)
}


main()

  .then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  })
