import { Box, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)({
     textDecoration:'none',
     color: 'dimgray',
     fontSize: 15,
     "&.active":{
          color: 'aliceblue'
     },
     ":hover":{
          color: 'aliceblue'
     }
})

export const StyledTool =styled(Toolbar)({
     backgroundColor:'rgb(51, 48, 48)',
     color:'white',
     paddingLeft:'10px',
     display:'flex',
     justifyContent:'space-between',
})

export const StyledTypo = styled(Typography)({
     display:'flex',
     gap:'30px'
})

export const StyledBox =styled(Box)({
     border:'1px solid #aaaaaa',
     width:'800'
})

export const StyledTy =styled(Typography)({
    background:'#f3f2f2f3',
    padding:'10px'
})

export const StyledMod = styled(Box)({
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%,-50%)',
     boxShadow:'24',
     backgroundColor:'white',
     width:'500px',
     padding:'15px'
    
})


export const StyledMbox = styled(Box)({
     display:'flex',
     justifyContent:'end',
     marginTop:'10px'
})