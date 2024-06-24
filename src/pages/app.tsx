import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyle from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
