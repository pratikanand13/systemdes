import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string,phoneNumber:string) {
 const res = await prisma.user.create({
    data: {
        email : username ,
        password,
        firstName,
        lastName,
        phoneNumber : phoneNumber
    },
    select : {
        id: true,
        password: true
    }
  })
  console.log(res)
}

insertUser("pratik@zoro","password","Pratik","Anand","09876543")