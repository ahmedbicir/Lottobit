import Head from 'next/head';
import VotingNumber from '../components/VotingNumber';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImage from '../images/rabit.jpg'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BackgroundContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundImage: `url(${backgroundImage.src})`, 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const MainContent = styled(Container)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const VotingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Voting Page</title>
        <meta name="description" content="Voting page for a crypto company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundContainer>
          <Header/>
        <MainContent>
          <VotingNumber />
        </MainContent>
        <Footer/>
      </BackgroundContainer>
    </>
  );
};

export default VotingPage;
