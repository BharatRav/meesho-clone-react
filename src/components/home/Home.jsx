import { Box } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import Header from '../header/Header'

const Home = () => {
  return (
    <>
        <Header />
        <Box style ={{marginTop:78}}>
            <NavBar />
        </Box>
        
    </>
  )
}

export default Home