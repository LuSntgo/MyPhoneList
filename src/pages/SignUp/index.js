import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import api from "../../services/api";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
} from "../../components/FormComponents";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: "",
    password: "",
    confirmPassword: "",
  });

  function handleSignUp({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas devem ser iguais");
      return;
    }
    const user = { ...formData };
    console.log(user.avatar);
    delete user.confirmPassword;

    try {
      await api.signUp(user);
      navigate("/");
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
            placeholder="Nome"
            type="name"
            onChange={(e) => handleSignUp(e)}
            name="name"
            value={formData.name}
            required
          />
          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) => handleSignUp(e)}
            name="email"
            value={formData.email}
            required
          />
          <Input
            placeholder="Avatar"
            type="url"
            onChange={(e) => handleSignUp(e)}
            name="avatar"
            value={formData.avatar}
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => handleSignUp(e)}
            name="password"
            value={formData.password}
            required
          />
          <Input
            placeholder="Confirme sua senha"
            type="password"
            onChange={(e) => handleSignUp(e)}
            name="confirmPassword"
            value={formData.confirmPassword}
            required
          />
          <Button type="submit">Cadastre</Button>
        </Form>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
      </Container>
    </>
  );
}
