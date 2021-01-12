import { createGlobalStyle } from 'styled-components';

const urlgit =
    'https://xesque.rocketseat.dev/platform/1587379725719-attachment.svg';
export default createGlobalStyle`
*   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
   background-color:#128AC6;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  button {
    cursor: pointer;
  }
`;
