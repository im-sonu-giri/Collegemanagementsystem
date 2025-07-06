const jwt = require("jsonwebtoken")
module.exports = async function(req,res,next) {
    const token = req.header['authorization']
    if (!token)
        return res.status(403).send("Token Missing");

    

    
}