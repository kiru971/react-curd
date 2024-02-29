import { Container, Typography } from '@mui/material'
import React from 'react'
import Login from '../page/Login'
import { StyledTool } from '../Css/tsakStyle'


const Home = () => {

  return (
    <>
    <StyledTool>
      <Typography variant='h5'>
      Aequalis
      </Typography>
    </StyledTool>
    <Container>
      <Login/>
    </Container>
    </>
  )
}

export default Home