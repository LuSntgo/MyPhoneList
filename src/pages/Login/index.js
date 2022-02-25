import React, { useState, useContext } from "react";
import Logo from "../../components/Logo";
import api from "../../services/api";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
} from "../../components/FormComponents";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setUser, setAvatar, setToken } = useContext(UserContext);

  function handleLogin({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const user = { ...formData };

    try {
      const { data } = await api.login(user);

      setToken(data.token);
      setAvatar(data.avatar);
      setUser(data.name);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <>
      <Container>
        <Logo />

        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) => handleLogin(e)}
            name="email"
            value={formData.email}
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => handleLogin(e)}
            name="password"
            value={formData.password}
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
      </Container>
    </>
  );
}
