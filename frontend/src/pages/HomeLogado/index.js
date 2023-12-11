import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const HomeLogado = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      Home Logado
      <div>
        <button text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </button>
      </div>
    </div>
  );
};

export default HomeLogado;
