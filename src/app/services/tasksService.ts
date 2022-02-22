import { Prisma, PrismaClient, Tasks } from '@prisma/client'

import { Task } from "../models/task";

const prisma = new PrismaClient()

export async function getTasks(): Promise<Tasks[]> {
  const tasks: Tasks[] = await prisma.tasks.findMany();
  return tasks
}

// Create a task
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

// Retrieve a task
export async function getTask(taskID:number) {
  const task: Tasks = await prisma.tasks.findUnique({
    where: {
      id: taskID
    }
  })
  return task
}

export async function update(taskID: number, taskTitle: string) {
  const task: Tasks = await prisma.tasks.update({
    where: {
      id: taskID
    },
    data: {
      title: taskTitle
    }
  });

  return task;
}

// Delete a task
export async function deleteTask(taskID:number) {
  await prisma.tasks.delete({
    where: {
      id: taskID
    }
  })
}

// Validate a task
export async function validate(taskID: number) {
  const task: Tasks = await prisma.tasks.update({
    where: {
      id: taskID
    },
    data: { done: true }
  })
  return task
}

// Cancel a validated task
export async function undo(taskID: number) {
  const task: Tasks = await prisma.tasks.update({
    where: {
      id: taskID
    },
    data: { done: false }
  })
  return task
}

