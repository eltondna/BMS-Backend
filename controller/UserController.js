const UserService = require("../service/UserService")
const UserController = {
    create: async (req, res)=>{
        try{
            const {username, password, role, introduction} = req.body;
            const avatar = req.file.path;
            if (avatar !== undefined ){
                console.log(req.file);
                const gender = 0;
                const result = await UserService.create(username, password, role, introduction, avatar,gender)
                if (result.length)
                    return res.status(200).json({result : 0})
            }
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Add user failed"})
        }
    },
    get: async (req, res)=>{
        try{
            const result = await UserService.get(req.userId)
            const result_array = result[0];
            if (result_array.length){
                return res.status(200).json({result : 0, data: result_array[0]})
            }
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Get all user failed"})
        }
    },
    getAll: async(req, res)=>{
        try{
            const result = await UserService.getAll();
            console.log(result)
            const users = result[0];
            if (users.length){
                return res.status(200).json({result : 0, data: users})
            }
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Get all user failed"})
        }
    },
    update: async(req, res)=>{
        try{
            const {username, gender, introduction} = req.body;
            console.log(req.body)
            let avatar;
            if (req.file !== undefined) avatar = req.file.path;
            const result = await UserService.update(req.userId, username, gender, introduction, avatar)
            if (result.length)
                return res.status(200).json({result : 0})
            
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Get all user failed"})
        }
    },
    updateOther: async(req, res)=>{
        try{
            const {id,username, password, role, introduction} = req.body;
            const result = await UserService.updateOther(id, username, password, role, introduction)
            if (result.length)
                return res.status(200).json({result : 0});
        }catch(err){
            console.log(err)
            res.status(400).json({result:-1, data: "Update other user failed"})
        }
    },
    delete: async(req, res)=>{
        try{
            const {id} = req.body;
            const result = await UserService.delete(id)
            if (result.length)
                return res.status(200).json({result : 0});

        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Delete user failed"})
        }
    }
}

module.exports = UserController;