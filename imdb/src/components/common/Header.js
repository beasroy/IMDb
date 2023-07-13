
import React from 'react';
import { useState, useRef } from 'react';
import { AppBar, Toolbar,  styled, Box ,Typography, InputBase, } from '@mui/material';
import { logoURL } from '../../constants/constant';
import {Menu,BookmarkAdd,ExpandMore} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../constants/route';
import HeaderMenu from './HeaderMenu';


const StyledToolBar = styled(Toolbar)`
    background: #121212 !important;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content:space-between;
    cursor:pointer;
    &>*{
        padding:0 15px
    }
    &>div{
        display:flex;
        align-items:center;
        cursor:pointer;
        &>p{
            font-size:14 px;
            font-weight:600;
        }
    }
    &>p{
            font-size:14 px;
            font-weight:600;
        }
`;
const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const Logo = styled('img')({
    width: 64 
})

function Header() {
    const [open,setOpen] = useState(null);
    const anchorRef = useRef(null);
    const handleToggle = () => {
        setOpen(prev => !prev);
    };
    const Navigate = useNavigate();
    return (
        <div>
            <AppBar position='static'>
            <StyledToolBar>
                <Logo src={logoURL} alt='logo' onClick={()=> Navigate(routePath.home)}/>
                <Box ref={anchorRef} onClick={handleToggle}>
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu handleToggle={handleToggle} open={open} anchorRef={anchorRef} />
                <InputSearchField
                    variant="outlined"
                />
                <Typography>IMDb<Box component="span" sx={{color:"#608fff"}}>Pro</Box></Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography onClick={()=> Navigate(routePath.signin)}>Sign In</Typography>
                <Box>
                    <Typography>En</Typography>
                    <ExpandMore />
                </Box>
            </StyledToolBar>
            </AppBar>
        </div>
    );
}

export default Header;