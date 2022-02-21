import { Task } from "../models/task";

import * as tasksServices from "../services/tasksService";

export async function tasks(req, res) {
  const tasks = await tasksServices.getTasks()
  res.json({
    tasks
  });
}

export async function create(req, res, next) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      "error": "Task title missing"
    })
  }

  const task = await tasksServices.createTask(title);
  res.status(201).json({
    "message": "task_created",
    task
  })
}

export async function task(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      "error": `missing the id parameter`
    })
  }

  const task = await tasksServices.getTask(parseInt(id));
  res.json(task) 
}

export function update(req, res, next) {
  const { id } = req.params;
}

export function deleteTask(req, res) {
  const { id } = req.params;


}
