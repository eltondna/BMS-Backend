const db_query = require("../connect")

const ProductService = {
    add: async (name, brief, description, cover, editTime)=>{
        let q;
        if (cover !== undefined){
            q = `INSERT INTO product (name, brief, description, cover, editTime) VALUES (?,?,?,?,?)`
            return await db_query(q, [name, brief, description, cover, editTime])
        }else{
            q = `INSERT INTO product (name, brief, description, editTime) VALUES (?,?,?,?)`
            return await db_query(q, [name, brief, description, editTime])
        }
    },
    getAll : async ()=>{
        const q = `SELECT id, name, brief, description, cover, editTime FROM product`
        return await db_query(q);
    },
    update: async (id, name, brief, description, cover, editTime)=>{
        let q;
        if (cover !== undefined){
            q = `UPDATE product SET name = ?, brief = ?, description = ?, cover = ?, editTime = ? WHERE id = ?`
            return await db_query(q, [name, brief, description, cover, editTime, id])
        }else{
            q = `UPDATE product SET name = ?, brief = ?, description = ?, editTime = ? WHERE id = ?`
            return await db_query(q, [name, brief, description, editTime, id])
        }
    },
    delete : async (id)=>{
        const q = `DELETE FROM product WHERE id = ?`
        return await db_query(q, [id]);
    }
};
module.exports = ProductService;

