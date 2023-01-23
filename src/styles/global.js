import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-primary: #FF70A5;
    --grey-0: #2D2D2D;
    --grey-1: #5B5B5B;
    --grey-2: #D9D9D9;
    --white: #FFF6F9;
    --color-hover: #FA4C8D;
    --sucess: #3FE864;
    --fail: #E83F5B;

    --input-font: 'Inter';
  }

  * {
     margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  
  body,html {
    width: 100vw;
    height: 100vh;
    font-family: var(--input-font);

    overflow-x: hidden;
    background: var(--grey-0);
  }

  button {
    cursor: pointer;
  }

`
