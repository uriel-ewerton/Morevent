import styled from "styled-components";

export const HeaderPopup = styled.div`
  height: 30%;
  position: relative;
  width: 272px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  & .linha {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 3px solid #272d48;
    
    border-left-style: none;
    width: 256px;
    
  }
  & .logo-m {
    height: 10%;
    width: 54px;
  }
  
  & .logo-completa {
    height: 27px;
    width: 154px;
    
  }

  & .titulo-pop-up {
    position: absolute;
    padding-top: 10px;
    color: #272d48;
    font-family: "Josefin Sans", sans-serif;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.48px;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
    top: 75%;
    width: 100%;
  }
`;
