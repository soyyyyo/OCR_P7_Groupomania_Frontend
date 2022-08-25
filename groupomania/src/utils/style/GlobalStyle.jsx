import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import "./Variables.css"
import "./Main.css"

const StyledGlobalStyle = createGlobalStyle`

    /* GLOBAL */


* {
  box-sizing: border-box;
  /* box-sizing est appliqué à tous les éléments */
}

html {
  font-size: 62.5%; /* -------------------------------------------------- */
}

body {
  font-family: "Raleway", sans-serif;
  line-height: 1.3;
  margin: 0;
}

img {
  max-width: 100%;
}

a {
  color: black;
  text-decoration: none;
}

h1 { /* -------------------------------------------------- */
  margin-block-start: 60px; 
  margin-block-end: 5px;
  font-size: 3.6rem;
}

h2 {
  font-size: 2.4rem;
  margin-block-start: 0;
  margin-block-end: 0;
}

h3 {
  font-size: 1.7rem;
  margin-block-end: 0px;
  margin-block-start: 0px;
  line-height: 1.2;
}

h4 {
  margin-bottom: 10px;
  font-size: 1.8rem;
}

p {
  font-size: 1.6rem;
  margin-block-end: 0px;
  margin-block-start: 2px;
} /* -------------------------------------------------- */

ul {
  list-style-type: none;
  padding-inline-start: 0px; /* -------------------------------------------------- */
}

// nav a {
//   font-size: 1.8rem;
// }

.container {
  max-width: 1300px;
  margin: auto;
  padding: 0 var(--padding-g);
}

/* END GLOBAL */
`

export default StyledGlobalStyle