import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "./style";
import ToastAnimated, { showToast } from "../../components/ui-lib";
import { Button, Input } from "../../components/FormComponents";
import api from "../../services/api";
import Loading from "../../components/Loading";

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    avatar: "",
  });

  function contactList(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  async function handleEdit(e) {
    setIsLoading(true);
    e.preventDefault();
    const contact = { ...formData };

    try {
      await api.updateContact(contact, id);
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      showToast({
        type: "error",
        message: "Ops! Confira os dados e tente novamente",
      });
    }
  }

  return (
    <Container>
      <ToastAnimated />
      <form onSubmit={handleEdit}>
        <Input
          name="name"
          type="text"
          onChange={contactList}
          value={formData.name}
          placeholder="Nome"
        ></Input>
        <Input
          name="phone"
          type="tel"
          onChange={contactList}
          value={formData.phone}
          placeholder="Telefone"
        ></Input>
        <Input
          name="email"
          type="email"
          onChange={contactList}
          value={formData.email}
          placeholder="E-mail"
        ></Input>
        <Input
          name="avatar"
          type="url"
          onChange={contactList}
          value={formData.avatar}
          placeholder="Avatar"
        ></Input>
        <Button disable={isLoading} type="submit">
          {" "}
          {isLoading ? <Loading /> : "Salvar"}
        </Button>
      </form>
    </Container>
  );
}
