const ProductService = require("../service/ProductService");
const moment = require("moment");
const ProductController = {
    add: async(req, res)=>{
        try{
            let cover;
            if (req.file){
                cover = req.file.path;
            }
            const {name, brief, description} = req.body;
            const editTime = moment().format("YYYY-MM-DD")
            const result = await ProductService.add(name, brief, description, cover, editTime);
            if (result){
                res.status(200).json({result:0 })
            }

        }catch(err){
            console.log(err)
            res.status(400).json({result:-1, data: "Add product failed"})
        }
    },
    getAll : async(req, res)=>{
        try{
            const result = await ProductService.getAll();
            console.log(result)
            const products = result[0];
            if (result){
                res.status(200).json({result:0, data: products})
            }
        }catch(err){
            console.log(err)
            res.status(400).json({result:-1, data: "Get all products failed"})
        }
    },
    update: async (req,res)=>{
        try{
            let cover;
            const {id, name, brief, description} = req.body;
            if (req.file){
                 cover = req.file.path;
            }
            const editTime = moment().format("YYYY-MM-DD")
            const result = await ProductService.update(id, name, brief, description, cover, editTime);
            if (result)
                res.status(200).json({result:0})
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Update Product failed"})
        }
    },
    delete : async (req, res)=>{
        try{
            const {id} = req.body;
            const result = await ProductService.delete(id);
            if (result){
                res.status(200).json({result:0})
            }
        }catch (err){
            console.log(err)
            res.status(400).json({result:-1, data: "Delete product failed"})
        }
    }

};

module.exports = ProductController;

