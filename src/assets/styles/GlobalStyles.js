import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,800&display=swap');


:root {
--red: #e20001;
--black: #191919;

}

*,*::after,*::before {
    box-sizing: border-box
}


html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: inherit;
}


p {
  margin: 0
}


`;

export default GlobalStyles;
