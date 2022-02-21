
import { PrismaClient } from '@prisma/client'
import { Task } from '../models/task';

const prisma = new PrismaClient()

async function main() {
  const allTasks = await prisma.tasks.findMany();
   return allTasks
}

export async function connectPrismaClient() {
  main().catch((e) => {
    throw e
  }).finally(async () => {
    console.dir('The connection was perfectly executed')
    await prisma.$disconnect()
  })
}
