import httpErrors from 'http-errors';

import { Task } from "../models/task";

import * as tasksServices from "../services/tasksService";

export async function tasks(req, res, next) {
  
  try {
    const tasks = await tasksServices.getTasks()
    res.json({
      tasks
    })
  } catch(error) {
    next(httpErrors(500, 'Technical error'))
  }
}

export async function create(req, res, next) {
  const { title } = req.body;

  if (!title) {
    return next(httpErrors(500, 'Task title missing'))
  }

  try {
    const task = await tasksServices.createTask(title);
    res.status(201).json({
      "message": "task_created",
      task
    })
  } catch(error) {
    next(httpErrors(500, 'Technical error'))
  }
}

export async function find(req, res, next) {
  const { id } = req.params

  if (!id) {
    return next(httpErrors(500, 'Missing the id parameter'))
  }

  try {
    const task = await tasksServices.getTask(parseInt(id));
    console.log(task)

    // if (task.code) {
    //   return next(httpErrors(500, task.meta.cause))
    // }
    res.locals.task = task
    next()
    
  } catch(error) {
    console.log('error')
    console.log(error)
    next(httpErrors(500, 'Technical error'))
  }
}

export function task(req, res) {
  const { task } = res.locals 
  res.json(task) 
}

export async function update(req, res, next) {
  const { task } = res.locals
  const { title } = req.body

  if (!title) {
    return next(httpErrors(500, `Missing the title parameter`))
  }

  try {
    const taskUpdated = await tasksServices.update(parseInt(task.id), title)
    return res.status(201).json({
      "success": "The task has been updated",
      "task": taskUpdated
    })
  } catch(error) {
    next(httpErrors(500, 'Technical error'))
  }
}

export async function deleteTask(req, res, next) {
  const { task } = res.locals

  try {
    await tasksServices.deleteTask(Number(task.id))

    return res.status(200).json({
      "success": "The task has been deleted"
    })
  } catch(error) {
    next(httpErrors(500, 'Technical error'))
  }
}

export async function validate(req, res, next) {
  const { task } = res.locals

  try {
    const taskValidated = await tasksServices.validate(parseInt(task.id));
    res.status(201).json({
      "success": "The task has been validated",
      "task": taskValidated
    })
  } catch(error) {
    next(httpErrors(500, 'Technical error'))
  }
}

export async function undo(req, res, next) {
  const { task } = res.locals

  try {
    const taskUndone = await tasksServices.undo(parseInt(task.id));
    res.status(201).json({
      "success": "The validation of the task has been canceled",
      "task": taskUndone
    })
  } catch(error) {
    next(httpErrors(500, error.message))
  }
}
