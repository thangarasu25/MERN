
import './task2.css';
import { React, useState} from "react";

import { NavLink, useNavigate ,Link} from 'react-router-dom';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet } from 'react-router-dom';
// import { Homepage } from '../tasks/home-page';
// import { Routes, Route } from "react-router-dom";
// import { Aboutpage } from './about-page';
// import {Contactpage} from './contactpage';
// import {Detailspage} from './details';
const pages = ['Home page', 'About page', 'Contact page','Details'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  



const NavBarLink = ({ to, text }) => {
  return (
    <Link
      component={NavLink}
      to={to}
      variant="button"
      color="text.primary"
      sx={{ my: 1, mx: 1.5 }}
     
    >
      {text}
    </Link>
  )
}



export function Task4() {
 // eslint-disable-next-lin
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const [url,seturl] = useState(null);

    const navigate = useNavigate();
 
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);

    };
  
    const handleCloseNavMenu = (e) => {
      setAnchorElNav(null);
      console.log('gold',e.currentTarget.value);
    
      
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    //no-unused-vars
   // eslint-disable-next-line
    return (
   
    <>
    
   <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          Thangarasu
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                <Typography textAlign="center" ></Typography>
              
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Thangarasu
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>




    </>

    )

}