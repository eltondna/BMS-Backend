const NewsService = require("../service/NewsService")
const moment = require("moment")
const NewsController = {
    add: async (req, res)=>{
        try{
            const {title, content, type:genre, isPublish} = req.body;
            const cover = req.file.path;
            const editTime = moment().format("YYYY-MM-DD");
            console.log(genre)
            const result = await NewsService.add(title, content, genre, isPublish, cover, editTime);
            if (result){
                res.status(200).json({result:0, data: "Add news success"})
            }
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Add news failed"})
        }
    },
    getAll: async (req, res)=>{
        try{
            const result = await NewsService.getAll();
            const news = result[0];
            return res.status(200).json({result:0, data: news})
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Get all news failed"})
        }
    },
    publish: async (req, res)=>{
        try{
            const {isPublish, id} = req.body;
            const result = await NewsService.publish(isPublish, id);
            console.log(result)
            if (result){
                res.status(200).json({result:0})
            }
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Publish news failed"})
        }
    },
    update: async (req, res)=>{
        try{
            const {id, title, content, genre } = req.body;
            let cover;
            if (req.file) cover = req.file.path;
            const editTime = moment().format("YYYY-MM-DD");
            const result = await NewsService.update(id, title, content, genre, cover, editTime);
            console.log(result);
            if (result){
                res.status(200).json({result:0})
            }
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Delete news failed"})
        }
    },
    delete : async( req, res )=>{
        try{
            const {id} = req.body;
            const result = await NewsService.delete(id);
            if (result){
                res.status(200).json({result:0})
            }
        }catch(err){
            console.log(err)
            res.status(400).json({result:-1, data: "Delete news failed"})
        }
    }
}

module.exports = NewsController;

