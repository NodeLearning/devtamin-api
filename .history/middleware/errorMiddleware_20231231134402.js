// middleware is a callback function
// like a middle man that detects everything
const  errorMiddleware = (err, req, res, next)=> {
    console.log('this is error middleware');
    res.json({message: err.message, stack: process})
}

module.exports = errorMiddleware;