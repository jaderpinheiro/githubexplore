import { createGlobalStyle } from 'styled-components';

import fundo from '../assets/fundo-novo.png';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #1b262c url(${fundo})  no-repeat 70% top;
        -webkit-font-smoothing: antialiased;

    }

    body , input , button{
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
