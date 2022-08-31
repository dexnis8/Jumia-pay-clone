import React from "react";
import styled from "styled-components";

function Section1() {
  return (
    <>
      <Container>
        <img src="./images/card-slide1.jpg" alt="cashback" />
        <img src="./images/card-slide2.jpg" alt="cashback" />
        <img src="./images/card-slide3.png" alt="cashback" />
        <img src="./images/card-slide3.png" alt="cashback" />
        <img src="./images/card-slide3.png" alt="cashback" />
      </Container>
    </>
  );
}
const Container = styled.div`
  max-width: 100%;
  width: 900px;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  column-gap: 1rem;
  margin-top: -3rem;
  img {
    width: 289px;
    border-radius: 6px;
  }
`;
export default Section1;
