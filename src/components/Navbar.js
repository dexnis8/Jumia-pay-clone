import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Header>
        <Nav>
          <img src="./images/logo-white.svg" alt="logo" />
          <List>BUSSINESS</List>
          <List>MY ORDERS</List>
        </Nav>
        <SignIN>
          <p>Icon</p>
          <p>SIGN IN</p>
        </SignIN>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  background-color: #378ef9;
  padding: 18px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
const Header = styled.div`
  max-width: 100%;
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 2rem;
  img {
    width: 164px;
  }
`;
const List = styled.li`
  list-style-type: none;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 0;
  color: #ffffff;
`;

const SignIN = styled.li`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  font-size: 15px;
  background-color: #a1dfff;
  padding: 5px 10px;
  line-height: 0;
  border-radius: 6px;
  color: #ffffff;
`;
export default Navbar;
