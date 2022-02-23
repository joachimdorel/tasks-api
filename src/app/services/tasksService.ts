import { PrismaClient, Task } from '@prisma/client'

const prisma = new PrismaClient()

export async function getTasks(): Promise<Task[]> {
  try {
    const tasks: Task[] = await prisma.task.findMany();
    return tasks
  } catch(error) {
    console.dir(error.message)
    return null
  }
}

// Create a task
export async function createTask(title) {
  try {
    const task: Task = await prisma.task.create({
      data: {
        title: title,
        done: false,
        createdAt: new Date()
      }
    })
    return task
  } catch(error) {
    console.dir(error.message)
    return null
  }
}

// Get a task
export async function getTask(taskID:number) {
  try {
    const task: Task = await prisma.task.findFirst({
      where: {
        id: taskID
      }
    })
    return task
  } catch(error) {
    console.dir(error.message)
    return null
  }
}

// Update a task
export async function update(taskID: number, taskTitle: string) {
  try {
    const task: Task = await prisma.task.update({
      where: {
        id: taskID
      },
      data: {
        title: taskTitle
      }
    })
    return task
  } catch(error) {
    console.dir(error.message)
    return null
  }
}

// Delete a task
export async function deleteTask(taskID:number) {
  try {
    await prisma.task.delete({
      where: {
        id: taskID
      }
    })
  } catch(error) {
    console.dir(error.message)
    return null
  }
}

// Validate a task
export async function validate(taskID: number) {
  try {
    const task: Task = await prisma.task.update({
      where: {
        id: taskID
      },
      data: { done: true }
    })
    return task
  } catch(error) {
    console.dir(error.message)
    return null
  }
}

// Cancel a validated task
export async function undo(taskID: number) {

  try {
    const task: Task = await prisma.task.update({
      where: {
        id: taskID
      },
      data: { done: false }
    })

    return task 
  } catch(error) {
    return error
  }
}

