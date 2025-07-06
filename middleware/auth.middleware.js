const jwt = require("jsonwebtoken")
module.exports = async function(req,res,next) {
    const token = req.header['authorization'];
    if (!token)
        return res.status(403).send("Token Missing");
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userid = decoded.id;
        next();
    }
    catch(err) {
        res.status(401).send("Unauthorized");
    }  
};