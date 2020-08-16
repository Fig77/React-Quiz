import styled, {createGlobalStyle} from 'styled-components';
import bg from './images/bg.webp';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background-image: url(${bg});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;

`;

