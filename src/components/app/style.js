import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body{
        box-sizing: border-box;
        display: flex;
        width: 100vw;
        height: 100vh;
        background: #8C11BE;        
    }

    h1{
        color: #FFFFFF;
        font-family: 'Saira Stencil One';
        font-size: 32px;
        font-weight: 400;
    }

    a{  
        color: #FFFFFF;
        font-family: 'Raleway';
        font-size: 15px;
        font-weight: 700;
        text-decoration: none;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 25px auto;
        
        input {
            border-radius: 5px;
            border: 1px solid #8C11BE;
            color: #000000;
            font-family: 'Raleway';
            font-size: 20px;    
            font-weight: 400;
            padding: 5px;
        }

        button {
            background: #A328D6;
            border: 1px solid #A328D6;
            border-radius: 5px;
            color: #FFFFFF;
            font-family: 'Raleway';
            font-size: 20px;    
            font-weight: 700;
            padding: 5px;
        }

`



export default GlobalStyle