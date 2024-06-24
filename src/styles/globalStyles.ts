import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/backgroundimg.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
