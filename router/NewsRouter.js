const NewsController = require('../controller/NewsController');
const express = require('express');
const multer = require('multer');
const router = express.Router();

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


router.post('/add',upload.single('file'), NewsController.add);
router.get('/getAll', NewsController.getAll)
router.post('/publish', NewsController.publish)
router.post('/delete', NewsController.delete)
router.post('/update', upload.single('file'), NewsController.update)


module.exports = router;


