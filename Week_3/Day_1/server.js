import express from 'express'
import router from './Routes/userRoutes.js'

const port = 3000;
const app = express();

app.use(express.json())
app.use('/user', router)

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);

});