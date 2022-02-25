import { useState, useEffect, useContext } from "react";
import {
  Container,
  Statement,
  List,
  MiniLogo,
  StyledLink,
  User,
} from "./style";
import { BsTrash } from "react-icons/bs";
import UserContext from "../../context/userContext";
import api from "../../services/api";
import { Modal } from "../../components/PhoneList";

export default function HomePage() {
  const { user, avatar, token, setSelected } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    renderHomePage();
  }, []);

  useEffect(() => {}, [formData]);

  function renderHomePage() {
    const promise = api.getList(token);
    promise.then((response) => {
      setFormData(response.data);
    });
  }

  function deleteContact(id, e) {
    e.stopPropagation();
    if (window.confirm("Você deseja deletar esse contato?")) {
      const promise = api.deleteContact(id);
      promise.then(() => renderHomePage());
      promise.catch(() => alert("Confira os dados e tente novamente"));
    }
  }

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  function selectContact(c) {
    setSelected({ ...c });
    openModal();
  }

  if (formData.length === 0) {
    return (
      <>
        <Container>
          <Statement>
            <User>
              <MiniLogo />
              <h1 className="username"> Olá, {user}!</h1>
              <img className="user-avatar" src={avatar}></img>
            </User>
            <div className="center">
              <span>Não há registros na sua lista telefônica 😔</span>
            </div>
            <div className="btn">
              <StyledLink to="/addContact">Adicionar contato</StyledLink>
            </div>
          </Statement>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <Statement>
            <User>
              <MiniLogo />
              <h1 className="username"> Olá {user}</h1>
              <img className="user-avatar" src={avatar}></img>
            </User>
            <List>
              {formData.map((c) => (
                <li onClick={() => selectContact(c)} key={c._id}>
                  <BsTrash
                    className="icon"
                    onClick={(e) => deleteContact(c._id, e)}
                    name="trash-outline"
                  ></BsTrash>
                  <img className="avatar" src={c.avatar} alt={c.name}></img>
                  <span className="name">{c.name} </span>
                  <span className="number">{c.phone}</span>
                  <span className="email">{c.email}</span>
                </li>
              ))}
            </List>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <div className="btn">
              <StyledLink to="/addContact">Adicionar contato</StyledLink>
            </div>
          </Statement>
        </Container>
      </>
    );
  }
}
