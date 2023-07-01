import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import {signOut} from "firebase/auth";
import {auth} from './firebase-config';

export default function ButtonAppBar({isAuth,setIsAuth}) {
  let navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate("/");
  }

  const signUserOut = () => {
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleRedirect}>
            Blog Drop
          </Typography>
          
          
          { !isAuth ?
          <Link to="/login"><Button style={{color:"white"}}>Login</Button> </Link>
            :
            <>
            <Link to="/input_Blog"><Button style={{color:"white"}}> Create Blog </Button> </Link> 

            <Button variant="contained" endIcon={<LogoutIcon />} onClick={signUserOut}>
              Log Out
            </Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}