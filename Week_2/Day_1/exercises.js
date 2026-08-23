// // display  numbers from 1 to 10
// function displayNumbers() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }

// // display letters from A to H using for loop
// function displayLetters() {
//     for (let i = 65; i <= 72; i++) {
//         console.log(String.fromCharCode(i));
//     }
//     }

// displayNumbers();
// // displayLetters();
// try {
// const response = await fetch('https://open.er-api.com/v6/latest/USD');
// const body = await response.json();

// console.log(body);
// const rates = body.rates.EUR;
// console.log(`Exchange rate for EUR: ${rates}`);
// }catch (error) {
//     console.error('Error fetching data:', error);
// }
import express from 'express';
import { readFile } from 'fs/promises';
const app = express();
const PORT = 3000;
const peopleData = await readFile('./people.json', 'utf-8');
const people = JSON.parse(peopleData).people;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
// creating an endpoint to get a single users info from thier id
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.query.id);
  const user = people.find(p => p.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});
// creating an endpoint to search for a user by name 
app.get('/users/search/:name', (req, res) => {
  const userName = req.query.name;
  const user = people.find(p => p.name === userName);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});
// creating an endpoint to get all users having a particular hobby 
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
