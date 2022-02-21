import { Prisma, PrismaClient, Tasks } from '@prisma/client'

import { Task } from "../models/task";

const prisma = new PrismaClient()

export async function getTasks(): Promise<Tasks[]> {
  const tasks: Tasks[] = await prisma.tasks.findMany();
  return tasks
}

export async function createTask(title) {
  const task: Tasks = await prisma.tasks.create({
    data: {
      title:      title,
      done:       false,
      created_at: new Date()
    }
  })
  return task
}

export async function getTask(taskID:number) {
  const task: Tasks = await prisma.tasks.findUnique({
    where: {
      id: taskID
    }
  })
  return task
}
