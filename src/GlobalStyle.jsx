import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   
    *{
        box-sizing:border-box;
        height:100%;
        
    }
    html{
        width:100%;
        height:100%;
        font-size:10px;
        padding:0;
        margin:0;
      body{
      }
        ::-webkit-scrollbar {
    width: 5px;
    height: 7px;

  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 15px solid transparent;
    width: 5px;
    background: rgba(4, 8, 15, 0.3);
  }
    }`;
export default GlobalStyle;
