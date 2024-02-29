import {  Typography } from '@mui/material'
import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { StyledDiv, StyledLinks } from '../Css/styelTak'


const DetailLayout = () => {
     const {id} = useParams()
  return (
    <>
     <StyledDiv variant='dense' >
          <Typography>
               <StyledLinks to='/home/users'>Users</StyledLinks> /{id}
          </Typography>
     </StyledDiv>
     <div className='container1'>
     <Outlet/>
     </div>
    </>
  )
}

export default DetailLayout