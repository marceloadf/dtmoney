import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #5429cc;
        --blue-light: #6933FF;
        --red: #E62E4D;
        --green: #33CC95;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px (Desktop)
    //hack para usar os tamanhos com REM = 1font ao invés de px para redimensionar
    //os tamanhos dos objetos de acordo com o tamanho máximo de tela definido logo a baixo.
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{ //input, textarea e button poussem seus propios tamanhos de font, por isso eles não herdam do body
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`