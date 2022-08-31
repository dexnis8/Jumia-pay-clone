import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <>
      <Container>
        <Footter>
          <Nav>
            <img src="./images/logo-white.svg" alt="logo" />
            <List>Terms & conditions</List>
            <List>Privacy and Cookie Notice</List>
          </Nav>
          <SignIN>
            <p>2022 JumiaPay - All Rights Reserved</p>
          </SignIN>
        </Footter>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #378ef9;
  padding: 15px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
const Footter = styled.div`
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
  letter-spacing: -1px;
  color: #ffffff;
`;

const SignIN = styled.li`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  font-size: 13px;
  padding: 5px 10px;
  margin-top: 4px;
  line-height: 0;
  border-radius: 6px;
  color: #ffffff;
`;

export default Footer;
