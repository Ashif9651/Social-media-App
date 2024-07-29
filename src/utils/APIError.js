
class APIError extends Error {
    constructor({
        statusCode,
        message = 'Something went wrong',
        error = [],
        stack = ""
    }) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.success = false; // Fixed typo here from `succes` to `success`

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, APIError);
        }
    }
}





















// class APIError extends Error {
//         constructor{
//     statusCode,
//         messaage = 'Something went wrong',
//         error = [],
//         stack = ""
// } {
//     super(message)
//     this.statusCode = statusCode
//     this.data = null
//     this.messaage = messaage
//     this.succes = false
//     this.error = this.error

//     if (stack) {
//         this.stack = stack
//     } else {
//         Error.captureStackTrace(this, this, constructor)
//     }
// }


// export { APIError }

