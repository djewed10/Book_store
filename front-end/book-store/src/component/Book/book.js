import React from "react"
import  { Link, useNavigate } from "react-router-dom"
import{Button} from "@mui/material"
import axios from "axios";
import "./book.css"




const Book=(props)=>{
const history=useNavigate();  
  const { _id, name, author, description, price, image } = props.book;

    const deletehandler=async()=>{
        await axios.delete(`http://localhost:5000/books/${_id}`)
        .then((res)=>res.data)
        .then(()=>history("/"))
        .then(()=>history("/books"));

    }
    return(
        <div className="card">
<img src={image} alt={name} />
<article>BY {author}</article>
<p>{description}</p>
<h3 >{price} DA</h3>
<Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
    update
</Button  >
<Button onClick={deletehandler} sx={{ mt: "auto" }} color="error" >
    delete
</Button>
        </div>  
    )

    
}
export default Book