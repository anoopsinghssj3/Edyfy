class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stacktr = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stacktr){
            this.stack = stacktr
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default ApiError