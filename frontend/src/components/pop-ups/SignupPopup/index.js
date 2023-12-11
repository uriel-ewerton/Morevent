import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Input from "../Input";
//import Button from "../Button";
import * as C from "./styles.js";
import  useAuth  from "../../../hooks/useAuth.js";

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
    }
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={username}
          onChange={(e) => [setUsername(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <button text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default SignupPopup;
