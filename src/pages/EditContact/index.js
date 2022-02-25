import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "./style";
import { Button, Input } from "../../components/FormComponents";
import api from "../../services/api";
// import UserContext from "../../context/userContext";

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
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
    e.preventDefault();
    const contact = { ...formData };

    try {
      await api.updateContact(contact, id);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
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
        <Button type="submit">Salvar</Button>
      </form>
    </Container>
  );
}
