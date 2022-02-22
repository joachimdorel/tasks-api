import express from 'express';

import { home } from  "./app/home";
import * as tasks from  "./app/controllers/tasks";

const app = express();
const port = 3000;

app.use(express.json());

// To launch the project: npm run dev

app.get('/',      home);

// Tasks management
app.get ('/tasks',              tasks.tasks);
app.post('/tasks',              tasks.create);
app.get ('/tasks/:id',          tasks.task);
app.post('/tasks/:id',          tasks.update);
app.post('/tasks/:id/delete',   tasks.deleteTask);
app.get ('/tasks/:id/validate', tasks.validate);
app.get ('/tasks/:id/undo',     tasks.undo);

app.listen(port, () => {
  return console.log(`Express is listening on the port ${port}`);
});



