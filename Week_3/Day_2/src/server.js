import express from 'express';
import dotenv from 'dotenv'
import internRouter from './Routes/userRoutes.js';
const app = express();

dotenv.config()
const PORT = 6000;

app.use(express.json());
  app.use('/api', internRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
export default app;