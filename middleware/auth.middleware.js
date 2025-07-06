const jwt = require("jsonwebtoken")
module.exports = function(req, res, next) {
    const authHeader= req.headers['authorization'];
    if (!authHeader)
        return res.status(401).send("Token Missing");
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send("token Missing");
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userid = decoded.id;
        next();
    }
    catch(err) {
        res.status(403).send("Unauthorized");
    }  
};