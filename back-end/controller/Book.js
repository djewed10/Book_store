const BadRequest = require("../errors/bad-request")
const NotFoundError = require("../errors/not-found")
const Bookshema=require("../models/book")
const {StatusCodes}=require("http-status-codes")

const getallbooks=async(req,res)=>{
const book=await Bookshema.find({})
if(!book) throw new NotFoundError ("no product found")
res.status(StatusCodes.OK).json({book})
}
const getbook=async(req,res)=>{
    const id= req.params.id 
    const book=await Bookshema.findOne({_id:id})
    if(!book) throw new NotFoundError ("no product found")
    res.status(StatusCodes.OK).json({book})
}
const createbook=async (req,res)=>{
    console.log(req.body)
    
/*const{name, author, description, price, available, image}=req.body*/
    const book=await Bookshema.create(req.body)

    if(!book) throw new BadRequest ("Unable To add")
    res.status(StatusCodes.CREATED).json({msg:"book created"})
}
const updatebook=async (req,res)=>{
    const {name, author, description, price, available, image}=req.body
    const id=req.params.id
    console.log("ffjff") 
    const book=await Bookshema.findByIdAndUpdate({_id:id},req.body,{new:true}
      );
    if(!book)  {
    throw new NotFoundError("Unable To update By this ID")}
    res.status(StatusCodes.OK).json({book})
}
const deletebook=async(req,res)=>{
    const {id}=req.params
    const book=await Bookshema.findByIdAndDelete(id)
    if(!book) throw new NotFoundError ("Unable To Delete By this ID")
    res.status(StatusCodes.OK).json({msg:"book successfully deleted"})
}
module.exports={
    getallbooks,
    getbook,
    createbook,
    updatebook,
    deletebook
}