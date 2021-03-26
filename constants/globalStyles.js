import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyle = createGlobalStyle`
:root{
    /* Colors */
    --black: ${Colors.black.toCSS()};
    --white: ${Colors.white.toCSS()};
    /* Fonts */
    --poppins: "poppins" , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  padding: 0;
  margin: 0;
}
*,
    input,
    select,
    textarea,
    option,
    button {
      outline: none !important;
    }
    ::-moz-selection {
      /* Code for Firefox */
      color: var(--white);
      background: #00fbff;
    }
    ::selection {
      color: var(--black);
      background: #02e3ff;
    }
    
`;

export default GlobalStyle;