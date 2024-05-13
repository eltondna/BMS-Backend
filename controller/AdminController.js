const jwt = require('jsonwebtoken')

const AdminService = require('../service/AdminService');

const AdminController = {
    login: async (req, res)=>{
        try{
            const {username , password} = req.body;
            console.log(username, password)
            const result =  await AdminService.login(username, password);
            if (result.length){
                const token = jwt.sign({userId:result[0].id}, process.env.JWT_SECRET, {expiresIn: '1d'})
                res.header('Authorization', token)
                return res.status(200).json({result : 1, data:result[0]})
            }
            return res.status(400).json({ result : 0, data: "Authentication Error"});
        }catch (err){
            console.log(err)
            return res.status(400).json({ result : 0, data: "DLLM"});
        }
    }
}

module.exports = AdminController