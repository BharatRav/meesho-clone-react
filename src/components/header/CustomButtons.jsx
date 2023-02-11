import { Box, Typography,styled} from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';


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
        // border-bottom: 0.2rem solid rgb(244,51,151);
        
       
    }
`;
const Userbox= styled(Box)`

    & :hover {
        color:rgb(244,51,151);
        border-bottom: 0.2rem solid rgb(244,51,151);
    }
`;
const CustomButtons = () => {
    return (
        <Wrapper>
        
            <DownloadBox>
                <PhoneIphoneOutlinedIcon/>
                <Typography >Download App</Typography>
            </DownloadBox>
            <Typography style={{marginTop:15,width:140}}>Become a Supplier</Typography>

            <Userbox>                
                <PermIdentityOutlinedIcon />
                <Typography>Profile</Typography>
            </Userbox>
            <CartContainer>                
                <ShoppingCartOutlinedIcon />
                <Typography style={{fontSize:"16px"}}>Cart</Typography>
            </CartContainer>
        </Wrapper>
    );
}

export default CustomButtons;