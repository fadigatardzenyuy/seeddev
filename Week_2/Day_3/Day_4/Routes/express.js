import express from 'express';
const app = express();
const PORT = 3000;
import { readFile } from 'fs/promises';

const data = await readFile('./people.json', 'utf-8');
const people = JSON.parse(data).people;
// adding a health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
// creating an endpoint to get a single users info from thier id from people.json file
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = people.find(p => p.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});
// creating an endpoint to search for a user by name from people.json file
app.get('/users/search/:name', (req, res) => {
  const userName = req.params.name;
  const user = people.find(p => p.name === userName);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});
// creating an endpoint to get all users having a particular hobby from people.json file
app.get('/users/hobby/:hobby', (req, res) => {
  const hobby = req.params.hobby;
  const users = people.filter(p => p.hobbies.includes(hobby));
  if (!users.length) {
    return res.status(404).json({ error: 'Users not found' });
  }
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});