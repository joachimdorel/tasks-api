# Task API

## Launch the project:
To launch the project:

```npm run dev```

The project is then accessible on the route:

```http://localhost:3000/``` 


## API Documentation

* ```GET  /``` 

  Main route.

* ```GET  /tasks``` 

  List all the tasks.

* ```POST /tasks``` 

  Create a task with a title sent in a JSON object. Post a JSON object with the following model: 

  ```{ "title": "task_title"}```

* ```GET  /tasks/:id``` 

  Get the informations of the task with the id *id*.

* ```POST /tasks/:id``` 

  Update the title of the task with the id *id*. Post a JSON object with the following model: 

  ```{ "title": "task_title"}```

* ```GET  /tasks/:id/delete```

  Delete the task with the id *id*
