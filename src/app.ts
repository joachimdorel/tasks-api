import express from 'express';
import bodyParser from 'body-parser';


import { home } from  "./app/home";
import * as tasks from  "./app/controllers/tasks";
import * as users from  "./app/controllers/users";

const app = express();
const port = 3000;

// To parse inputs in the body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',      home);

// app.post('/create',               users.create);
// app.post('/login',                users.login);

// Tasks management
app.get   ('/tasks',              tasks.tasks);
app.post  ('/tasks',              tasks.create);
app.all   ('/tasks/:id*',         tasks.find);
app.get   ('/tasks/:id',          tasks.task);
app.put   ('/tasks/:id',          tasks.update);
app.delete('/tasks/:id/delete',   tasks.deleteTask);
app.put   ('/tasks/:id/validate', tasks.validate);
app.put   ('/tasks/:id/undo',     tasks.undo);

app.listen(port, () => {
  return console.log(`Express is listening on the port ${port}`);
});



