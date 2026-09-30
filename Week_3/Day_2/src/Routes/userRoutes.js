import express, { Router } from 'express'
import { addIntern, getAllInterns} from '../models/userModel.js'
const internRouter = express.Router();

internRouter.get('/interns', async (req, res) => {
    const interns = await getAllInterns();
    return res.json(interns);
}); 
router.post('/interns', async (req, res) => {
    const { name, email, gender, department_id} = req.body;
    const intern = await addIntern( name, email, gender, department_id);
    return res.json({message: "Intern added successfully", intern})
})

   
export default internRouter;