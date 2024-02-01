import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material"
import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"







const Addbook=()=>{
    const history=useNavigate()
    const [checked, setChecked] = useState(false);
    const[input,setinput]=useState({
        name:"",
        author:"",
        description:"",
        price:"",
        image:"",
    
    })
    const sendrequest=async ()=>{
        await axios.post("http://localhost:5000/books",
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
        <form onSubmit={handlesubmit}>
            <Box  display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}>
            <FormLabel for="name" >name</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" id="name" name="name" value={input.name} onChange={handlechange} >
            </TextField>
            <FormLabel for="autho" >author</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" id="author" name="author" value={input.author} onChange={handlechange}>
            </TextField>
            <FormLabel  for="description" >description</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined"  id="description" name="description" value={input.description} onChange={handlechange}>
            </TextField>
            <FormLabel  for="price" >price</FormLabel>
            <TextField id="price"  type="number"
              margin="normal" fullWidth variant="outlined" name="price" value={input.price} onChange={handlechange}>
            </TextField> 
            <FormLabel  for="image" >image</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" id="image" name="image" value={input.image} onChange={handlechange}>   
            </TextField>
            <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
         <Button variant="contained" type="submit">Addbook
        </Button></Box>
            </form>
    )
}
export default Addbook