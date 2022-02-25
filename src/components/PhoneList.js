import React, { useRef, useEffect, useCallback, useContext } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import UserContext from "../context/userContext";
import { Link } from "react-router-dom";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;
const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  background: #8e6d9f;
  border-radius: 5px;
  text-align: center;

  padding: 12px;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: white;
  p {
    margin-bottom: 1rem;
  }
  .avatar {
    max-width: 300px;
    max-height: 300px;
    min-height: 150px;
    min-width: 150px;
    border-radius: 20%;
    margin-top: 10px;
    margin-bottom: 50px;
  }
  .contact-data {
    width: 100%;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name {
    min-width: 20%;
  }
  .email {
    min-width: 20%;
  }
  .number {
    min-width: 20%;
  }
  span {
    margin-right: 30px;
    margin-left: 30px;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const { selected } = useContext(UserContext);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <img
                  className="avatar"
                  src={selected.avatar}
                  alt={selected.name}
                ></img>
                <div className="contact-data">
                  <span className="name">Nome: {selected.name} </span>
                  <span className="number">Telefone: {selected.phone}</span>
                  <span className="email">E-mail: {selected.email}</span>
                </div>
                <StyledLink to={`/editContact/${selected._id}`}>
                  Editar contato
                </StyledLink>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
