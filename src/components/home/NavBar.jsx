import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'

const Wrapper = styled(Box)`
    display:flex;
    border:1px solid gray;
    padding:20px 40px;
    justify-content:space-between;
    & :hover {
        border-bottom: 0.2rem solid rgb(244,51,151);
        color:rgb(244,51,151);
    }
    box-sizing: border-box;
    //position :fixed;
`;
const Text =styled(Typography)`
    font-size:18px;
    font-weight:100;
    cursor:pointer;
    
    
`;
const NavBar = () => {
  return (
    <Wrapper>
        {
            navData.map(data=>(
                <Text>
                    {data}
                </Text>
            ))
        }
    </Wrapper>
  )
}

export default NavBar