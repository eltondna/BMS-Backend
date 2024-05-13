const jwt = require('jsonwebtoken');
const AuthMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token){
        return res.status(400).json({ result : 0, data: "Authentication Error"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }catch (err){
        return res.status(400).json({ result : 0, data: "Authentication Error"});
    }
}

module.exports = AuthMiddleware;
