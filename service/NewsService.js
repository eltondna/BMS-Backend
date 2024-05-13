const db_query = require("../connect")

const NewsService = {
    add: async (title, content, genre, isPublished, cover, editTime)=>{
        const q = `INSERT INTO news (title, content, genre, isPublish, cover, editTime) VALUES (?,?,?,?,?,?)`
        return await db_query(q, [title, content, genre, isPublished, cover, editTime])
    },
    getAll: async()=>{
        const q = `SELECT id, title, content, genre, isPublish, cover, editTime FROM news ORDER BY editTime DESC`;
        return await db_query(q);
    },
    publish: async (isPublish, id)=>{
        const q = `UPDATE news SET isPublish =? WHERE id = ?`;
        return await db_query(q, [isPublish, id]);
    },
    update: async(id, title, content, genre, cover, editTime)=>{
        let q;
        console.log(id, title, content, genre, cover, editTime);
        if (cover!== undefined ){
            q = `UPDATE news SET title =?, content =?, genre =?, cover =?, editTime =? WHERE id = ?`;
            return await db_query(q, [title, content, genre, cover, editTime, id]);
        }else {
            q = `UPDATE news SET title =?, content =?, genre =?, editTime =? WHERE id = ?`;
            return await db_query(q, [title, content, genre, editTime, id]);
        }
    },
    delete: async (id)=>{
        const q = `DELETE FROM news WHERE id = ?`;
        return await db_query(q, [id]);
    }
};

module.exports = NewsService;
