import styled from "styled-components";

export const LoginPopup = styled.div`
  position: fixed;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 42%;
  min-width: 300px;
  max-width: 500px;
  height: 80%;
  min-height: 300px;
  max-height: 600px;
  border: 1.3vh solid #272d48;
  border-radius: 2%;
  background-color: white;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`;
export const EntradasEsqueceuSenha = styled.div`
  width: 85%;

  & .EsqueceuSenha {
    padding: 0px 20px;
  }
  & .EsqueceuSenha p {
    color: black;
    font-size: 16px;
    font-weight: 400;
  }

  & .EsqueceuSenha a {
    color: #102eb5;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
  }
`;

export const LinksCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & label {
    font-size: 24px;
  }

  & .Imagens {
    display: flex;
    padding: 10px 0px;
    width: 110px;
    justify-content: space-between;
  }

  & .Imagens img {
    width: 50px;
    height: 50px;
  }

  & .NaoCadastrado {
    color: #272d48;
    font-size: 20px;
    padding-bottom: 10px;
    
    text-decoration: none;
  }

  & .NaoCadastrado Link {
    color: #102eb5;
    text-decoration: none;
  }
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;
