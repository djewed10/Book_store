const mongoose=require("mongoose")

const Bookshema=new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
    },
    author: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      available: {
        type: Boolean,
        default:false,
      },
      image: {
        type: String,
        required: true,
      },
})
module.exports=mongoose.model('book',Bookshema)