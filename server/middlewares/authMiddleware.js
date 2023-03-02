const jwt = require('jsonwebtoken')
const { createError } = require('../utils/error')

exports.verifyToken = (req, res, next) =>{
    const token = req.headers.token;
    if(!token) return next(createError(401, "You are not authenticated."));
    else{
        jwt.verify(token, process.env.JWT,(err, user)=>{
            if(err) return next(createError(403, "Token is not valid."));
            else{
                req.user = user;
                next();
            }
        });
    }
}

exports.verifyUser = (req, res, next) =>{
    verifyToken(req,res,  ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }
        else{
            return next(createError(403, "You are not authorized."));
        }
    });
}