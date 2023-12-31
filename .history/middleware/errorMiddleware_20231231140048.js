// middleware is a callback function
// like a middle man that detects everything
const  errorMiddleware = (err, req, res, next)=> {
    console.log('this is error middleware');

    // return original error details only in the developent 
    res.json({message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null})
}

module.exports = errorMiddleware;