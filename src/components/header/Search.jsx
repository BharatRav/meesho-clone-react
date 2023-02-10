import { InputBase,Box,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const SearchContainer =styled(Box)`
    background:#fff;
    width:30%;
    margin:  1rem 2rem;
    border-radius:4px;
    display:flex;
    // margin: 25px;
    border: 1px solid gray;
`;

const SearchInputBase =styled(InputBase)`
    padding-left:2px;
    width:100%;
    font-size:unset;
`;
const SearchIconWrapper =styled(Box)`
    color: gray;
    padding:5px;
`;
const Search = () => {
    return (
        <SearchContainer>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <SearchInputBase 
                placeholder='Try Saree, Kurti or Search by Product Code'
            />
        </SearchContainer>
    );
}
export default Search;