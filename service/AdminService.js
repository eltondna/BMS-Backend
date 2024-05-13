const db_query =  require("../connect.js")
const AdminService = {
    login:  async (username, password)=>{
        const q = 'SELECT * FROM user WHERE username = ? AND password = ?';
        const result = await db_query(q, [username, password]);
        console.log(result);
        return result[0];
    }
}

module.exports = AdminService