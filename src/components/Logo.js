import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <Container>
      <Image src={logo} alt="MyList logo" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  @media (max-width: 700px) {
    width: 120px;
    height: 100px;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 130px;
`;
