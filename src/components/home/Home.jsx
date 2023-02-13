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
        <img src ="	https://images.meesho.com/images/marketing/1631722939962.webp" alt = "data" style={{width:"100%",height: "5%"}}/>
        
    </>
  )
}

export default Home