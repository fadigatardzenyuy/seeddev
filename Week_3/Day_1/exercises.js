// import express from 'express';
// import { readFile } from 'fs/promises';
// const app = express();
// const PORT = 8000;
// app.use(express.json());


// app.get('/profile', async (req, res) => {
//   const filedata = await readFile('./profile.json', 'utf-8');
//   const parsed = JSON.parse(filedata);
//   const profile = parsed.profile;
//   res.json(profile);
// });



// app.get('/products', async (req, res) => {
//   const filedata = await readFile('./products.json', 'utf-8');
//   const parsed = JSON.parse(filedata);
//   const products = parsed.products;
//   const firstSixProducts = products.slice(0, 6);
//   res.json(firstSixProducts);
// });



// app.post('/products', async (req, res) => {
//   const filedata = await readFile('./products.json', 'utf-8');
//   const parsed = JSON.parse(filedata);
//   const products = parsed.products;
//   const newProduct = req.body;
//   products.push(newProduct);
//   res.json({ message: 'Product added successfully', product: newProduct });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

