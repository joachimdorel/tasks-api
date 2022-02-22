import { Task } from "../models/task";

import * as tasksServices from "../services/tasksService";

export async function tasks(req, res) {
  try {
    const tasks = await tasksServices.getTasks()
    res.json({
      tasks
    })
  } catch(error) {
    res.status(500).json({
      "error": "Technical error"
    })
  }
}

export async function create(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(500).json({
      "error": "Task title missing"
    })
  }

  try {
    const task = await tasksServices.createTask(title);
    res.status(201).json({
      "message": "task_created",
      task
    })
  } catch(error) {
    res.status(500).json({
      "error": "Technical error"
    })
  }
}

export async function task(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(500).json({
      "error": `missing the id parameter`
    })
  }

  try {
    const task = await tasksServices.getTask(parseInt(id));
    res.json(task) 
  } catch(error) {
    res.status(500).json({
      "error": "Technical error"
    })
  }
}

export async function update(req, res) {
  const { id } = req.params;
  const { title } = req.body;

  if (!id || !title) {
    return res.status(500).json({
      "error": "missing " + id ? "" : "the id parameter " + title ? "" : "the title parameter "
    })
  }

  try {
    const task = await tasksServices.update(parseInt(id), title)
    return res.status(201).json({
      "success": "The task has been updated",
      "task": task
    })
  } catch(error) {
    res.status(500).json({
      "error": "Technical error"
    })
  }
}

export async function deleteTask(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(500).json({
      "error": "missing the id parameter"
    })
  }

  try {
    await tasksServices.deleteTask(Number(id))

    return res.status(200).json({
      "success": "The task has been deleted"
    })
  } catch(error) {
    res.status(500).json({
      "error": "Technical error"
    })
  }
}

export async function validate(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status.json({
      "error": "missing the id parameter"
    })
  }

  try {
    const task = await tasksServices.validate(parseInt(id));
    res.status(201).json({
      "success": "The task has been validated",
      "task": task
    })
  } catch(error) {
    res.status(500).json({
      "error": "Technical error"
    })
  }
}

export async function undo(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status.json({
      "error": "missing the id parameter"
    })
  }

  try {
    const task = await tasksServices.undo(parseInt(id));
    res.status(201).json({
      "success": "The validation of the task has been canceled",
      "task": task
    })
  } catch(error) {
    res.status(500).json({
      "error": "Technical error"
    })
  }
}
