const UserController = require('../controller/UserController')
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/avatar')
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.').pop(); // Extract the extension
        const filename = `${Date.now()}` + "." +extension; // Append the extension to the filename
        cb(null, filename);
    }
})

const upload = multer({storage})

router.post('/create', upload.single('file'),UserController.create);
router.post('/get', UserController.get);
router.post('/getAll', UserController.getAll);
router.post('/update',upload.single('file'), UserController.update);
router.post('/updateOther', UserController.updateOther);
router.post('/delete', UserController.delete);


module.exports = router;