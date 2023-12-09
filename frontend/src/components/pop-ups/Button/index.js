import React from "react";
import * as S from "./styles.js";

const Button = ({ TextoBotao, onClick, Type = "button" }) => {
  return <S.Button onClick={onClick} type={Type}>{TextoBotao}</S.Button>;
};

export default Button;
