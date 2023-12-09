import styled from "styled-components";

export const Entradas = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 16px 20px;
  border-radius: 5px;
  color: #272d48;

  & label {
    font-size: 22px;
  }
  & input {
    border: 3px solid #272d48;
    border-radius: 3px;
    height: 35px;
    font-size: 20px;
    color: #272d48;
    padding: 5px 16px;
  }
`;
