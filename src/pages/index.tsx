import Head from 'next/head';
import Header from '../components/Header';
import NumberSelector from '../components/NumberSelector';
import Footer from '../components/Footer';
import { Box, Typography, Grid, Container } from '@mui/material';
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

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '20px',
  borderRadius: '10px',
  display: 'inline-block',
  margin: '20px 0',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
    margin: '10px 0',
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

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Crypto Landing Page</title>
        <meta name="description" content="Landing page for a crypto company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundContainer>
        <Header />
        <MainContent>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <ContentBox>
                <Typography variant="h5" gutterBottom>Your chance to win a <span style={{ background: "gold", fontWeight: "bold" }}>BTC</span></Typography>
                <Typography variant="body1">
                  1) Connect your Wallet<br />
                  2) Select your 7 gameplay Numbers and then click Next<br />
                  3) Mine your vote by excluding your gameplay selections<br />
                  4) Contribute to the reward pool by sending required tokens<br />
                  5) Confirm and then Submit your Selections<br />
                  Good luck!
                </Typography>
              </ContentBox>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <NumberSelector /> */}
            </Grid>
          </Grid>
        </MainContent>
        <Footer />
      </BackgroundContainer>
    </>
  );
};

export default Home;
