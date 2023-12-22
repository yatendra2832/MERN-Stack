const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Something went wrong'
    const extradetails = err.extradetails || 'Errors from Backend';

    return res.status(status).json({
        message, extradetails
    })
};

module.exports = errorMiddleware;