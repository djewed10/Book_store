const express=require("express")
const { getallbooks, getbook,createbook, updatebook, deletebook } = require("../controller/Book")
const router=express.Router()

router.route("/").post(createbook).get(getallbooks)
router.route("/:id").get(getbook).patch(updatebook).delete(deletebook)
module.exports=router