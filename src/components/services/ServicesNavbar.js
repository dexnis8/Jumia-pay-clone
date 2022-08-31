import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ServicesNavbar(props) {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Header>
          <Nav>
            <List onClick={() => navigate("/airtime")}>
              &larr; {props.service}
            </List>
          </Nav>
          <SignIN>
            <p>Icon</p>
            <p>SIGN IN</p>
          </SignIN>
        </Header>
      </Container>
    </>
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
const Nav = styled.div``;
const List = styled.li`
  list-style-type: none;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 18px;
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

export default ServicesNavbar;
