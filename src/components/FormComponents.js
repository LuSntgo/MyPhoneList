import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 25px;

  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 28px;
  }
`;

const Form = styled.form`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin-bottom: 32px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  color: #000;
  width: 100%;

  background: #ffff;
  border-radius: 5px;
  margin-bottom: 22px;

  padding: 15px 16px;

  ::placeholder {
    color: #8e6d9f;
  }
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;

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

const StyledLink = styled(Link)`
  cursor: pointer;

  font-size: 25px;
  font-style: normal;
  line-height: 18px;
  font-weight: 500;
  color: #8e6d9f;
`;

export { Container, Form, Input, Button, StyledLink };
