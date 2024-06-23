import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  background: 'transparent',
  boxShadow: 'none',
  padding: '10px 20px',
  color: 'blue',
 
});

const NavBar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',

});

const NavLinks = styled(Box)({
  display: 'flex',
  gap: '20px',
  fontWeight:"bold",
  fontSize:"70px",
  background:"white",
  padding:"20px",
});

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <NavBar>
          <Typography variant="h6" component="div">
             Lottobit
          </Typography>
          <NavLinks>
            <Typography variant="body1">About</Typography>
            <Typography variant="body1" >Litepaper</Typography>
            <Typography variant="body1" >Roadmap</Typography>
            <Typography variant="body1" >FAQs</Typography>
          </NavLinks>
          <Button variant="contained" sx={{ background: "#f2c94c" }}>Connect Wallet</Button>
        </NavBar>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
