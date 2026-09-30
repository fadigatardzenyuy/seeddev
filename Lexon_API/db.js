import pool from './db.js';

const getAllUsers = async () => {
    try {
        const res = await pool.query('SELECT * FROM users');
        return res.rows;
    } catch (err) {
        console.error('Error fetching users:', err);
        throw err;
    }
};
const getUser = async () =>{
    
}