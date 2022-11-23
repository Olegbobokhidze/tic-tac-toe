import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0px;
    padding:0;
}
body{
    font-family: 'Outfit', sans-serif;
    height: 100vh;
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1A2A33;
    position:relative;

}
`;
