import {createGlobalStyle} from 'styled-components'

export const GlobalStyles=createGlobalStyle`
    body {
        background-image: url('https://cdn.pixabay.com/photo/2021/05/10/14/48/rain-6243559_1280.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1,h3{
        font-family: 'Roboto Condensed';
    }
    p{
        font-family: 'Lato';
    }
    span{
        font-family: 'Poppins';
    }
    button{
        font-family: 'Roboto Condensed';
    }

`