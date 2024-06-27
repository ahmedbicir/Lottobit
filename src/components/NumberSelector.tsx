import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const NumberGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, auto)',
  justifyContent: 'center',
  gap: '10px',
  margin: '20px 0',
});

const NumberButton = styled(Button)<{ selected: boolean }>(({ selected }) => ({
  backgroundColor: selected ? '#f2c94c' : 'gray',
  color: 'white',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: selected ? '#d4a80c' : 'darkgray',
  },
}));

const ErrorMessage = styled(Typography)({
  color: 'red',
  marginTop: '10px',
});

const NumberSelector: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleNumberClick = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(num => num !== number));
      setError('');
    } else if (selectedNumbers.length < 7) {
      setSelectedNumbers([...selectedNumbers, number]);
      setError('');
    } else {
      setError('You can select up to 7 numbers only');
    }
  };

  const handleNextClick = () => {
    if (selectedNumbers.length === 7) {
      router.push({
        pathname: '/voting-number',
        query: { selected: selectedNumbers.join(',') },
      });
    } else {
      setError('Please select exactly 7 numbers');
    }
  };

  const numberLayout = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [19, 20, 21],
  ];

  return (
    <Box textAlign="center" sx={{ padding:"20px",marginTop:"20px"}}>
      <span  style={{color:"white", background:"#1E196D",border:"2px solid white",padding:"15px",borderRadius:"10px"}}>Select 7 Numbers</span>
      <NumberGrid>
        {numberLayout.flat().map(number => (
          <NumberButton
            key={number}
            onClick={() => handleNumberClick(number)}
            selected={selectedNumbers.includes(number)}
          >
            {number}
          </NumberButton>
        ))}
      </NumberGrid>
      <Button variant="contained" color="primary" onClick={handleNextClick} sx={{color:"white", background:"#1E196D",border:"2px solid white",padding:"15px",borderRadius:"10px"}}>
        Next
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
  );
};

export default NumberSelector;
