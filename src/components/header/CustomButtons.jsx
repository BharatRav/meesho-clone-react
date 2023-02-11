import { Box, Typography,styled} from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import Profile from "../Login/profile";


const Wrapper =styled(Box)`
    color: black;
    display:flex;
    margin: 0 3% 0 auto ;
    & > p, & > div {
        margin-right: 40px;
        font-size:16px;
        align-items:center;
    }
    align-item:center;
    cursor:pointer;
`;

const CartContainer =styled(Box)`
    // display:flex;
    // color:black;
`;
const DownloadBox= styled(Box)`
    display:flex;
    & :hover {
        color:rgb(244,51,151);
        border-bottom: 0.2rem solid rgb(244,51,151);
        
       
    }
`;
const Userbox= styled(Box)`

    & :hover {
         color:rgb(244,51,151);
        //  border-bottom: 0.2rem solid rgb(244,51,151);
    }
    &: hover .profile-bar{
        display: block;
        z-index: 1;
         background-color: #fff;
        border-bottom: none;
`;
const CustomButtons = () => {
    return (
        <Wrapper>
            <DownloadBox>
                <PhoneIphoneOutlinedIcon/>
                <a href="https://apps.apple.com/us/app/meesho/id1457958492" target="_blank">Download APP</a>
            </DownloadBox>
            <Typography style={{marginTop:15,width:140}}>Become a Supplier</Typography>

            <Userbox>                
                <PermIdentityOutlinedIcon />
                <Typography>Profile</Typography>
                <Profile />
            </Userbox>
            <CartContainer>                
                <ShoppingCartOutlinedIcon />
                <Typography style={{fontSize:"16px"}}>Cart</Typography>
            </CartContainer>
        </Wrapper>
    );
}

export default CustomButtons;