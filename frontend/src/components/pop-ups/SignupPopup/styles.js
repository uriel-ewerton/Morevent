import styled from "styled-components";

export const SignupPopup = styled.div`
  position: fixed;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 42%;
  min-width: 300px;
  max-width: 500px;
  height: 85%;
  min-height: 600px;
  max-height: 600px;
  border: 1.3vh solid #272d48;
  border-radius: 2%;
  background-color: white;
  flex-wrap: nowrap;
  justify-content: space-evenly;

  & button {
    width: 37%;
    min-width: 150px;
    height: 100%;
    max-height: 50px;
    font-size: 2em;
    margin-bottom: 10px;
    margin-top: 0px;
  }
`;
export const Entradas = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  & div {
    padding: 5px 0px 0px 5px;
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
