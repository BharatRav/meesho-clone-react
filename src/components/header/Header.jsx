import React from 'react'
import {AppBar,Toolbar,Box,styled} from '@mui/material';

import MeeshoLogo from './MeeshoLogo';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';


//Box is div, AppBar is header,Typography is h,p tags

const HeaderStyled = styled(AppBar)`
    background:#fff;
    height: 78px;
    align-item:center;
    display: flex;
`;
const Component =styled(Box)`
    margin-left:1%;
    align-item:center;
    cursor:pointer;
`;
const Header = () => {
  return (
    <HeaderStyled>
        <Toolbar style={{minHeight:45}}>
            <Component>
                <Link  to="/home"><MeeshoLogo /></Link>
            </Component>
            
            <Search />
            <CustomButtons />
        </Toolbar>
    </HeaderStyled>
  )
}

export default Header
