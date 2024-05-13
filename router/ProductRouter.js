const express = require('express');
const router = express.Router();
const multer = require('multer');
const ProductController = require('../controller/ProductController');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/newsCover')
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.').pop(); // Extract the extension
        const filename = `${Date.now()}` + "." +extension; // Append the extension to the filename
        cb(null, filename);
    }
})
const upload = multer({storage})
router.post("/add",upload.single('file'), ProductController.add)
router.get("/getAll", ProductController.getAll)
router.post("/delete", ProductController.delete)
router.post("/update", upload.single('file'), ProductController.update);

module.exports = router;
