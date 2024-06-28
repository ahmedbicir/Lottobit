import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#151313',
  boxShadow: 'none',
  padding: '20px 20px', 
  color: 'white',
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
  fontSize: '20px', 
  padding: '10px',
  fontFamily: 'Playwrite New Zealand',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '14px',
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
          <Box display="flex" alignItems="center">
            {/* <img src="/logo.jpeg" alt="Logo" style={{ height: '40px', marginRight: '10px' }} /> */}
            <Typography variant="h6" component="div">
              Lottobit
            </Typography>
          </Box>
          <NavLinks>
            <Typography variant="body1">About</Typography>
            <Link
              href="/notes/fragments.pdf" 
              download="fragments.pdf" 
              sx={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Typography variant="body1">Whitepaper</Typography>
            </Link>           
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant="body1">Roadmap</Typography>
            </Link>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant="body1">FAQs</Typography>
            </Link>
          </NavLinks>
          <Box>
            <Button variant="contained" onClick={handlePlayGameClick} sx={{ marginRight: '10px', background: '#1E196D' }}>Play Game</Button>
            <Button variant="contained" sx={{ background: '#F4C204', fontWeight: 'bold' }}>Connect Wallet</Button>
          </Box>
        </NavBar>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
