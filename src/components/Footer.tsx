import React from 'react';
import { Box, IconButton } from '@mui/material';
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
  marginTop: 'auto',
  gap: '20px',
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Box>
        <IconButton
          href="#"
          color="inherit"
          sx={{
            background: "#F4C204",
            marginLeft: "20px",
            '&:hover': {
              backgroundColor: 'blue',
            },
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="#"
          color="inherit"
          sx={{
            background: "#F4C204",
            marginLeft: "20px",
            '&:hover': {
              backgroundColor: 'blue',
            },
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="#"
          color="inherit"
          sx={{
            background: "#F4C204",
            marginLeft: "20px",
            '&:hover': {
              backgroundColor: 'blue',
            },
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
