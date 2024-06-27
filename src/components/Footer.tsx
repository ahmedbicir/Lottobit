import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  background: '#151313',
  marginTop: 'auto', // to push the footer to the bottom of the page
  gap: '20px', // space between social media links
 
});
const SocialLink = styled(IconButton)({
  textDecoration: 'none',
  color: 'inherit',
  margin: '20px',
  padding:"20px",
});
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      {/* fontFamily: "'Comic Sans MS', 'Handlee', 'Patrick Hand', */}
      <Box>
      
      <Typography variant="h6" sx={{color:"white",fontFamily:"Handlee"}}>Follow Us</Typography>
     
      <IconButton href="#" color="inherit"  sx={{background:"#F4C204" ,marginLeft:"20px"}}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="#" color="inherit" sx={{background:"#F4C204",marginLeft:"20px"}}>
          <TwitterIcon />
        </IconButton>
        <IconButton href="#" color="inherit" sx={{background:"#F4C204",marginLeft:"20px"}}>
          <InstagramIcon />
        </IconButton>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
