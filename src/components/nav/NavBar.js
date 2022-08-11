import React, {useState} from "react";
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Container, MenuItem} from "@mui/material";
import { Menu } from '@mui/icons-material'

const pages = ['Home', 'About', 'Planning', 'AAII Journal', 'Market Portfolios',
'Investing Ideas', 'Screening', 'Community', 'Education', 'A+ Investor'];
const aboutMenuSettings = ['About Us', 'History'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  
  const siteNameStyle = {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none'
  }
  
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  }
  
  const handleOpenAboutMenu = event => {
    setAnchorElAbout(event.currentTarget);
  }
  
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseAboutMenu = () => setAnchorElAbout(null);
  
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Menu sx={{ display: { xs: 'none', md: 'flex'}, mr: 1}} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#'
            sx={siteNameStyle}
            >
            AAII
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='menu button?'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <Menu />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Menu sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              ...siteNameStyle,
              display: { xs: 'flex', md: 'none'}
            }}
          >AAII</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >{page}</Button>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
};

export default NavBar;
