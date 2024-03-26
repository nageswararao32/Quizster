import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Img1 from '../Img1.jpeg';
import { Button, MenuItem } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MyPage from './MyPage';

const pages = ['Home', 'ComputerScience', 'Television', 'GeneralKnowledge', 'Politics', 'Nature', 'Sports', 'History', 'Music', 'Film', 'Geography'];

function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (page === "ComputerScience") {
      navigate('/ComputerScience');
    } else if (page === "Television") {
      navigate('/Television');
    } else if (page === "GeneralKnowledge") {
      navigate('/GeneralKnowledge');
    } else if (page === "Politics") {
      navigate('/Politics');
    }else if (page === "Home") {
      navigate('/Home');
    } else if (page === "Film") {
      navigate('/Film');
    } else if (page === "Music") {
      navigate('/Music');
    } else if (page === "Geography") {
      navigate('/Geography');
    } else if (page === "History") {
      navigate('/History');
    } else if (page === "Sports") {
      navigate('/Sports');
    } else if (page === "Nature") {
      navigate("/Nature");
    } else {
      console.error("Invalid Page");
    }
  };

  return (
    <div>
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Img1} alt='img1' onClick={() => { navigate('/') }} style={{ width: "80px", height: "80px", borderRadius: "80%", cursor: "pointer" }} />
          <Box onClick={() => { navigate("/") }}>
            <Typography style={{ cursor: "pointer", fontFamily: "sans-serif" }} >Quizster</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }} >
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
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center" color={location.pathname === `/${page}` ? 'blue' : 'green'}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  bgcolor: location.pathname === `/${page}` ? 'orange' : '',
                  '&:hover': {
                    bgcolor: location.pathname === `/${page}` ? 'green' : 'transparent',
                  },
                }}
              className='btn1'>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <MyPage />
    </div>
  );
}
export default Home;
