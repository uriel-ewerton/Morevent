import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderPopup from "../../components/pop-ups/HeaderPopup";
import Button from "../../components/pop-ups/Button";
import useAuth from "../../hooks/useAuth";

const HomeLogado = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      Home Logado
      <div>
        <button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </button>
      </div>
    </div>
  );
};

export default HomeLogado;
