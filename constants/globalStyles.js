import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyle = createGlobalStyle`
:root{
    /* Colors */
    --black: ${Colors.black.toCSS()};
    --white: ${Colors.white.toCSS()};
}
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