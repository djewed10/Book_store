import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material"
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"







const Bookdetail=()=>{
    const history=useNavigate()
    const id=useParams().id
    const [checked, setChecked] = useState(false);
    const[input,setinput]=useState({
        name:"",
        author:"",
        description:"",
        price:"",
        image:"",
    
    })
    useEffect(()=>{
const fetchdata=async()=>{
await axios.get(`http://localhost:5000/books/${id}`)
.then(res=>res.data).then((data)=>{setinput(data.book)
setChecked(data.book.available)})
}
fetchdata()
    },[id])

    
    
    const sendrequest=async ()=>{
        await axios.patch(`http://localhost:5000/books/${id}`,
       {
        name:String(input.name),
        author:String(input.author),
        description:String(input.description),
        price:Number(input.price),
        image:String(input.image),
        available:Boolean(checked)
       } 
        ).then(res=>res.data)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
sendrequest().then(()=>history("/books")) 
    }
    const handlechange=(e)=>{
setinput((prev)=>({
...prev,
[e.target.name]:e.target.value
    }))
    }
    return(
        <div>
            {input &&(
        
        <form onSubmit={handlesubmit}>  <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
            <FormLabel for="name" >name</FormLabel>
            <TextField id="name" name="name" value={input.name} onChange={handlechange} >
            </TextField>
            <FormLabel for="autho" >author</FormLabel>
            <TextField id="author" name="author" value={input.author} onChange={handlechange}>
            </TextField>
            <FormLabel  for="description" >description</FormLabel>
            <TextField id="description" name="description" value={input.description} onChange={handlechange}>
            </TextField>
            <FormLabel  for="price" >price</FormLabel>
            <TextField id="price" name="price"  type="number" margin="normal" fullWidth variant="outlined" value={input.price} onChange={handlechange}>
            </TextField> 
            <FormLabel  for="image" >image</FormLabel>
            <TextField id="image" name="image" value={input.image} onChange={handlechange}>   
            </TextField>
            <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
         <Button variant="contained" type="submit">updateBook
        </Button>
           </Box> </form>
            )}</div>
    )
}
export default Bookdetail