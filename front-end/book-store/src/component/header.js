import React, { useState } from "react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header=()=>{

const [value,setvalue]=useState()
    return(
        <div>
            <AppBar  sx={{ backgroundColor: "#232F3D" }} position="sticky">

                <Toolbar>
<NavLink to="/" style={{ color: "white" }}>
    <Typography>
        <LibraryBooksIcon />
    </Typography>
</NavLink>
               
            
            <Tabs value={value} onChange={(e,value)=>setvalue(value)} sx={{ ml: "auto" }} textColor="inherit" indicatorColor="primary"> 
                <Tab LinkComponent={NavLink} to="/add"  label="Add Product"  /> 
                <Tab LinkComponent={NavLink} to="/books" label="Books"/> 
                <Tab LinkComponent={NavLink} to="/about" label="About Us"/> 
            </Tabs> </Toolbar></AppBar>
        </div>
        

    )
}
export default Header