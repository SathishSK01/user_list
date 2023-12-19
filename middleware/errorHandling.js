const { constants } = require("../errorCode");
const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode ? req.statusCode : 500;
    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Error", message: err.message, stackTrace: err.stack});
        break;
        case constants.NOT_FOUND:
            res.json({ title: "Not found", message: err.message, stackTrace: err.stack});
        break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack});
        break;
        case constants.SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stack});
        break;
        case constants.UNAUTHROZIED:
            res.json({ title: "Unauthrozied", message: err.message, stackTrace: err.stack});      
        default:
            console.log("API is Working")
            break;
    }    
};

module.exports = errorHandler;
