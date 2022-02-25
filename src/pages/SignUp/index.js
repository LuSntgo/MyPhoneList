import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import ToastAnimated, { showToast } from "../../components/ui-lib";
import api from "../../services/api";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
} from "../../components/FormComponents";
import Loading from "../../components/Loading";

export default function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setIsLoading(false);
      showToast({
        type: "warn",
        message: "Ops! As senhas devem ser iguais!",
      });
      return;
    }
    const user = { ...formData };
    delete user.confirmPassword;

    try {
      await api.signUp(user);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      showToast({
        type: "error",
        message: "Ops! Confira os dados e tente novamente",
      });
    }
  }

  return (
    <>
      <Container>
        <ToastAnimated />
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
          <Button disable={isLoading} type="submit">
            {" "}
            {isLoading ? <Loading /> : "Cadastre"}
          </Button>
        </Form>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
      </Container>
    </>
  );
}
