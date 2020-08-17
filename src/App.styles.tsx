import styled, {createGlobalStyle} from 'styled-components';
import bg from './images/bg.webp';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background-image: url(${bg});
  font-family: Catamaran;
  font-size: 1.3rem;
  font-weight: 700;
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
  align-items:center;
> p {
  color: #fff;
}

h1 {
  font-family: Fascinate Inline, 'Arial Narrow Bold', sans-serif;
  background-image: linear-gradient(180deg, #fff, #87f1ff);
  backround-size: 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  font-size: 60px;
}

.score {
  color: #fff;
  font-size: 2rem;
  margin: 0;
}

.start, .next {
  cursor: pointer;
  background: linear-gradient(180deg, #fff, #ffcc91);
  border: 2px solid #d3855;
  box-shadow: 0x 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 40px;
}

.start {
  max-width: 200px;
}

`