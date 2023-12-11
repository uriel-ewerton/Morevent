import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import HeaderPopup from "../HeaderPopup";
import * as S from "./styles.js";
import useAuth from "../../../hooks/useAuth.js";

const SignupPopup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!username | !email | !senha | !senhaConf) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
      setError("As senhas não são iguais");
      return;
    }

    const res = await signup(username, email, senha);
    if (res) {
      setError(res);
    } else {
      navigate("/");
      alert("Cadastro realizado com sucesso.")
    }
  };

  return (
    <S.SignupPopup>
      <HeaderPopup Titulo={"Realizar Cadastro"} />
      <S.Entradas>
        <Input
          type="text"
          TextoEntrada={"Digite seu nome"}
          value={username}
          onChange={(e) => [setUsername(e.target.value), setError("")]}
        />
        <Input
          type="email"
          TextoEntrada={"Digite seu E-mail"}
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          TextoEntrada={"Digite sua Senha"}
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Input
          type="password"
          TextoEntrada={"Confirme sua senha"}
          error={error}
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />
      </S.Entradas>
      <Button TextoBotao="Cadastrar" onClick={handleSignup} />
      <S.LinksCadastro>
        <label>Conecte-se com:</label>
        <div className="Imagens">
          <img src="images/Facebook.png" alt="Facebook" />
          <img src="images/Google.png" alt="Google" />
        </div>

        <div className="NaoCadastrado">
          <p>
            Já possui cadastro? <Link to="/">Faça Login.</Link>
          </p>
        </div>
      </S.LinksCadastro>
    </S.SignupPopup>
  );
};

export default SignupPopup;
