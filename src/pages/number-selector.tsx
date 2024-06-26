import Head from 'next/head';
import Header from '../components/Header';
import NumberSelector from '../components/NumberSelector';
import Footer from '../components/Footer';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImage from '../images/rabit.jpg';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundImage: `url(${backgroundImage.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: -1,
  [theme.breakpoints.down('sm')]: {
    backgroundPosition: 'top',
  },
}));

const MainContent = styled(Container)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}));

const NumberSelectorPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Number Selector</title>
        <meta name="description" content="Select your numbers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundContainer>
        <Header />
        <MainContent>
          <NumberSelector />
        </MainContent>
        <Footer />
      </BackgroundContainer>
    </>
  );
};

export default NumberSelectorPage;
