import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px 0',
  padding: '0 20px',
  color:'white',
 
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Box>
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>Roadmap</Link>
        <Link href="#" color="inherit">Use Case</Link>
      </Box>
      <Box>
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>Terms and Conditions</Link>
        <Link href="#" color="inherit">Privacy Policy</Link>
      </Box>
      <Box>
        <IconButton href="#" color="inherit"  sx={{background:"blue"}}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="#" color="inherit" sx={{background:"blue"}}>
          <TwitterIcon />
        </IconButton>
        <IconButton href="#" color="inherit" sx={{background:"blue"}}>
          <InstagramIcon />
        </IconButton>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
