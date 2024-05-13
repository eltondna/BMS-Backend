const db_query = require("../connect")


const UserService = {
    get: async(userId)=>{
        const q = `SELECT id,username, role, introduction, avatar, gender FROM user WHERE id=?`;
        const result = await db_query(q,[userId]);
        return result;
    },
    getAll: async()=>{
        const q = `SELECT id,username, role, introduction, avatar, gender FROM user`;
        const result = await db_query(q);
        return result;
    },
    create : async(username, password, role, introduction, avatar, gender)=>{
        const q = `INSERT INTO user (username, password, role, introduction, avatar,gender ) VALUES (?,?,?,?,?,?)`;
        const result = await db_query(q, [username, password, role, introduction, avatar,gender]);
        return result;
    },
    update: async(id, username, gender, introduction, avatar)=>{
        let q;
        let result;
        if (avatar !== undefined){
            q = `UPDATE user SET username=?, gender=?, introduction=?, avatar=? WHERE id=?`;
            result = await db_query(q, [username, gender, introduction, avatar, id]);
        }else{
            q = `UPDATE user SET username=?, gender=?, introduction=? WHERE id=?`;
            result = await db_query(q, [username, gender, introduction, id]);
        }
        return result;
    },
    updateOther: async(id, username, password, role, introduction)=>{
        let result;
        if (password !== undefined){
            const q = `UPDATE user SET username=?, password=?, role=?, introduction=? WHERE id=?`;
            result = await db_query(q, [username, password, role, introduction, id]);
        }else{
            const q = `UPDATE user SET username=?, role=?, introduction=? WHERE id=?`;
            result = await db_query(q, [username, role, introduction, id]);
        }
        console.log(result);
        return result;
    },
    delete: async(id)=>{
        const q = `DELETE FROM user WHERE id=?`;
        const result = await db_query(q, [id]);
        return result;
    }
}

module.exports = UserService;