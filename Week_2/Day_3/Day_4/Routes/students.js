import express from 'express';
const router = express.Router();

let students = [
    { id: 1, name: "Ada", score:91},
    { id: 1, name: "Kofi", score:68},
    { id: 1, name: "Zara", score:84},
];

let nextId = 4;

router.get("/", (req, res) => { 
    const minScore = req.query;
    if (minScore) {
        const studentsFound = students.filter(student => student.minScore >= score);
        if(!studentsFound) {
            return res.json({message: "students not found"});
          res.json({success: true,
             studentsFound
            });  
        }
    }
    res.json({students});

}); 

