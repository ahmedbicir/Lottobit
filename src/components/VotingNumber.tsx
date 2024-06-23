import React, { useState, useEffect } from 'react';
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

const NumberButton = styled(Button)<{ selected: boolean, disabled: boolean }>(({ selected, disabled }) => ({
  backgroundColor: selected ? '#f2c94c' : 'gray',
  color: 'white',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: !disabled ? (selected ? '#d4a80c' : 'darkgray') : 'gray',
  },
}));

const ErrorMessage = styled(Typography)({
  color: 'red',
  marginTop: '10px',
});

const VotingNumber: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (router.query.selected) {
      const selected = (router.query.selected as string).split(',').map(Number);
      setSelectedNumbers(selected);
    }
  }, [router.query]);

  const handleNumberClick = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setError('You cannot select the previously chosen numbers');
    } else if (selectedNumbers.length < 7) {
      setSelectedNumbers([...selectedNumbers, number]);
      setError('');
    } else {
      setError('You can select up to 7 numbers only');
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
    <Box textAlign="center">
      <Typography variant="h6">Select 7 Numbers</Typography>
      <NumberGrid>
        {numberLayout.flat().map(number => (
          <NumberButton
            key={number}
            onClick={() => handleNumberClick(number)}
            selected={selectedNumbers.includes(number)}
            disabled={selectedNumbers.includes(number)}
          >
            {number}
          </NumberButton>
        ))}
      </NumberGrid>
      <Button variant="contained" color="primary">Submit</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
  );
};

export default VotingNumber;
