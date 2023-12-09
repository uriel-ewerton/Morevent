import React from "react";
import * as S from "./styles";

const Input = ({ TextoEntrada, type, value, onChange }) => {
  return (
    <S.Entradas>
      <label>{TextoEntrada}</label>
      <input type={type} value={value} onChange={onChange}></input>
    </S.Entradas>
  );
};

export default Input;
