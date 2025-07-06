const jwt = require("jsonwebtoken")
module.exports = function(req, res, next) {
    const token = req.headers['authorization'];
    if (!token)
        return res.status(401).send("Token Missing");
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userid = decoded.id;
        next();
    }
    catch(err) {
        res.status(403).send("Unauthorized");
    }  
};