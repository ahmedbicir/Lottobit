// src/components/ButtonGroup.tsx
import React from 'react';
import { Box, Button } from '@mui/material';
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
    <ButtonContainer>
      <CustomButton variant="contained">Lite Paper</CustomButton>
      <CustomButton variant="contained">Tokenomics</CustomButton>
      <CustomButton variant="contained">How to Buy</CustomButton>
      <CustomButton variant="contained">Contract Audit</CustomButton>
    </ButtonContainer>
  );
};

export default ButtonGroup;
