import pool from '../db/index.js';
import internRouter from '../Routes/userRoutes.js';

export const getAllInterns = async () => {
    const result = await pool.query('SELECT * FROM intern');
    return result.rows;
}
 export const addIntern = async (internRouter) => {
    
 }

