import styled from "styled-components";
import { Link } from "react-router-dom";
import list from "../../assets/list.png";

const Container = styled.div`
  min-height: 100vh;
  margin-left: 30px;
  margin-right: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Statement = styled.div`
  height: 80vh;
  width: 65vw;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 10px;

  .center {
    width: 240px;
    height: 50px;
    text-align: center;
    margin: auto;
  }
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #8e6d9f;
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MiniLogo = styled.div`
  width: 100%;
  height: 80px;
  background-image: url(${list});
  background-repeat: no-repeat;
  background-size: 80px;
  overflow: hidden;
  position: sticky;
`;
const User = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-bottom: 20px;

  width: 100%;
  height: 100px;
  overflow: hidden;

  .username {
    color: #8e6d9f;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.5px;
    width: 20%;
  }

  .user-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

const List = styled.ul`
  width: 100%;
  height: 62vh;
  color: #8e6d9f;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  padding: 20px 0;

  font-family: "Raleway";
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  .icon {
    display: flex;
    font-size: 20px;
    color: #8e6d9f;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  li {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 90%;
    min-width: 90%;
    height: 60px;
    letter-spacing: 1px;
    border-bottom: solid 1px lightgrey;
    border-radius: 4px;
    margin: 5px;
    color: white;
    flex-shrink: 0;

    .name,
    .number,
    .email {
      min-width: 20%;
    }
  }
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

export { Container, Statement, List, MiniLogo, StyledLink, User };
