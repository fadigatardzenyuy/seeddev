import express from 'express'

const router = express.Router()

router.get('/', (req, res) =>{
    res.send('All interns are active')
})

router.post('/payment', (req, res) =>{
    const data = req.body
    console.log(data)

    return res.json(data)
})
export default router