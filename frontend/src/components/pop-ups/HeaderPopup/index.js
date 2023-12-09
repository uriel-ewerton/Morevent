import React from "react";
import * as S from "./styles";

const HeaderPopup = ({ Titulo }) => {
  return (
    <S.HeaderPopup>
      <div className="linha">
        <img className="logo-m" alt="Logo" src="images/M.png" />
        <img
          className="logo-completa"
          alt="Mor event"
          src="images/MorEvent.png"
        />
      </div>
      <div className="titulo-pop-up">
        <pre>{Titulo}</pre>
      </div>
    </S.HeaderPopup>
  );
};
export default HeaderPopup;
