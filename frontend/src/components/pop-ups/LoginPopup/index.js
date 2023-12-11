import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderPopup from "../HeaderPopup";
import Input from "../Input";
import Button from "../Button";
import * as S from "./styles.js";
import  useAuth  from "../../../hooks/useAuth.js";

const LoginPopup = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = await signin(email, senha);

    if (res) {
      setError(res);
    } else {
      navigate("/");
    }
  };


  return (
    <S.LoginPopup>
      <HeaderPopup Titulo={"Realizar Login"} />
      <S.EntradasEsqueceuSenha>
        <Input
          TextoEntrada="Digite seu Email"
          type="email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          TextoEntrada="Digite sua Senha"
          type="password"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <S.labelError>{error}</S.labelError>
        <div className="EsqueceuSenha">
          <p>
            Esqueceu a senha? <a href="@">Clique aqui.</a>
          </p>
        </div>
      </S.EntradasEsqueceuSenha>
      <Button TextoBotao="Login" onClick={handleLogin} />
      <S.LinksCadastro>
        <label>Cadastre-se com:</label>
        <div className="Imagens">
          <img src="images/Facebook.png" alt="Facebook" />
          <img src="images/Google.png" alt="Google" />
        </div>

        <div className="NaoCadastrado">
          <p>
            Não tem uma conta? <Link to="/">Faça seu Cadastro.</Link>
          </p>
        </div>
      </S.LinksCadastro>
    </S.LoginPopup>
  );
};

export default LoginPopup;
