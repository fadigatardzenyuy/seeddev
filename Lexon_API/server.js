import express from 'express'

const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
    res.send({message: 'Server health is good'})
})

app.get('/', (req, res) => {
     res.send({message: `Server is running on ${PORT}`});
     console.log(`Server is running on ${PORT}`);
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
