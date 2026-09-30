// // using express to create a server
// import express from 'express'
// import { readFile} from 'fs/promises';

// const app = express();
// const PORT = 3000;      
  
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
//    app.get('/home', (req,res) =>{
//     console.log(req);
//     // res.send('welcometo the homepage!');
//     res.json({message:'welcome to the home page'});

//    });
//    app.post('/post', (req,res) =>{
//     console.log(req);
//     res.json({message:'post request recieved'})
//    });
   
   
//    app.put('/put', (req,res) =>{
//     console.log(req);
//     res.json({message:'put request recieved'});

//    });
   
   
//    app.patch('/patch', (req,res) =>{
//     console.log(req);
//     res.json({message:'patch request recieved'});

//    });
   
//    app.delete('/delete', (req,res) =>{
//     console.log(req);
//     res.json({message:'delete request recieved'});

//    });

//    app.get('/users/:id', async (req, res) => {
//     const id= req.params.id
//     const filedata =await readFile('./users.json', 'utf-8')
//     const parsed = JSON.parse(filedata)
//     const users = parsed.users
//     const user = users.find(user => user.id == id)
//   return res.json(user);
//     })
//     // Searching users by name
//     app.get('/users/search', async (req, res) => {
//         const name = req.query.name;
//         const filedata = await readFile('./users.json', 'utf-8');
//         const parsed = JSON.parse(filedata);
//         const users = parsed.users;
//         const filteredUsers = users.filter(user => user.name.includes(name));
//         return res.json(filteredUsers);
//     });



// // app.delete
// // app.put
// // app.patch
// // app.post

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
