const{StatusCodes}=require("http-status-codes")
const Custom = require("./custom-error")
class BadRequest extends Custom{
    constructor(message){
        super(message)
       this.status=StatusCodes.BAD_REQUEST
    }
}
module.exports=BadRequest