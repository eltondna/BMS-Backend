const mysql = require('mysql2/promise');

const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
})

const db_exec = async (query, params)=>{
        const conn = await db;
        let result;
        if (params != 'undefined'){
            result = await conn.execute(query, params);
        }else{
            result = await conn.execute(query);
        }
        return result;
        
}
module.exports = db_exec;