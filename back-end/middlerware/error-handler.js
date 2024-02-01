const { StatusCodes } = require("http-status-codes")
const Custom = require("../errors/custom-error")

const errorhandler=(err,req,res,next)=>{
    if (err instanceof Custom){
      return res.status(err.status).json({msg:err.message})
    }
 return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("something went wrong")
}
module.exports=errorhandler