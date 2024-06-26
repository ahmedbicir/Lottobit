import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  padding: '10px 20px',
  color: 'blue',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const NavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  fontWeight: 'bold',
  fontSize: '16px', // Reduced font size for smaller screens
  background: 'white',
  padding: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '14px', // Further reduced font size for very small screens
  },
}));

const Header: React.FC = () => {
  const router = useRouter();

  const handlePlayGameClick = () => {
    router.push('/number-selector');
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <NavBar>
          <Typography variant="h6" component="div">
            Lottobit
          </Typography>
          <NavLinks>
            <Typography variant="body1">About</Typography>
            <Typography variant="body1">Litepaper</Typography>
            <Typography variant="body1">Roadmap</Typography>
            <Typography variant="body1">FAQs</Typography>
          </NavLinks>
          <Box>
            <Button variant="contained" sx={{ background: "#f2c94c", marginRight: '10px' }}>Connect Wallet</Button>
            <Button variant="contained" onClick={handlePlayGameClick}>Play Game</Button>
          </Box>
        </NavBar>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
