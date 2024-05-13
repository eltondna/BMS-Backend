const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express();
const AdminRouter = require('./router/AdminRouter')
const UserRouter = require("./router/UserRouter")
const NewsRouter = require("./router/NewsRouter")
const auth = require('./middleware/Authmiddleware')
app.use(cors({ 
    exposedHeaders: ['Authorization']
}))
app.use(express.json())
app.use('/public',express.static('public'))
app.use("/admin/auth", AdminRouter)
app.use("/admin/user", auth, UserRouter)
app.use("/admin/news", auth, NewsRouter)

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Server is listening on port ' + port);
})

