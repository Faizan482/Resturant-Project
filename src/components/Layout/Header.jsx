import { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Link ,NavLink} from 'react-router-dom';
import '../../styles/HeaderStyle.css';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.svg'
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrwerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrwerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1,my:2}}>
      <Link><img src={Logo} alt='logo' height='70px' width='200px'/></Link>
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li><NavLink activeClassName='active' to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/menu'}>Menu</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>

      </ul>
    </Box>
  )
  return (
    <>

      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleDrwerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1 }}><NavLink><img src={Logo} alt='logo' height='70px' width='250px'/></NavLink></Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>

              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer variant='temporary' open={mobileOpen} onClose={handleDrwerToggle}
          sx={{display:{xs:'block',sm:'none'}, "& .MuiDrawer-paper":{
            boxSizing:'border-box',
            width:'240px'
          }}}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box><Toolbar/></Box>
      </Box>

    </>
  )
}

export default Header