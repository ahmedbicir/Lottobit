// src/components/ButtonGroup.tsx
import React from 'react';
import { Box, Button, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  margin: '20px 0',
  padding: '10px 20px',
});

const CustomButton = styled(Button)({
  backgroundColor: '#d3dbe8',
  color: 'black',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  width: '200px', 
});

const ButtonGroup: React.FC = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={6}>
        <ButtonContainer>
          <CustomButton variant="contained">White Paper</CustomButton>
          <CustomButton variant="contained">Tokenomics</CustomButton>
          <CustomButton variant="contained">How to Buy</CustomButton>
          <CustomButton variant="contained">Contract Audit</CustomButton>
        </ButtonContainer>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ position: 'relative', height: '100%' }}>
          <Box sx={{ background: "red" ,display: 'flex',flexDirection: 'column', gap: 2 }}>


        

          <Link 
        href="#" 
        color="inherit" 
        sx={{ 
          marginRight: 2, 
          position: 'absolute', 
          left: { xs: '100px', sm: '200px' }, 
          padding: '15px', 
          color: "white", 
          background:"#1E196D" ,
          border: "2px solid white", 
          borderRadius: "10px", 
          textDecoration: "none" 
        }}
      >
        Roadmap
      </Link>        
       <Link href="#" sx={{ marginRight: 2,position: 'absolute',top:"70px" ,left: "100px",color:"black", background:"#F4C204",border:"2px solid white",padding:"15px",borderRadius:"10px",textDecoration:"none" }}>Terms and Conditions</Link> 
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ButtonGroup;
