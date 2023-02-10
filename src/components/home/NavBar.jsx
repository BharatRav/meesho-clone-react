import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'

const Wrapper = styled(Box)`
    display:flex;
    border:1px solid gray;
    padding:20px 40px;
    justify-content:space-between;
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