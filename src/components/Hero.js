import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <>
      <Container>
        <SubContainer>
          <h1>
            Airtime, utility bills, shopping - All your daily needs in one place
          </h1>
          <Images>
            <img src="./images/googleplay.png" alt="google play" />
            <img src="./images/appgallery.png" alt="app gallery" />
            <img src="./images/appstore.png" alt="app store" />
          </Images>
        </SubContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
  background-color: #378ef9;
  padding: 18px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-top: -10px;
  padding-bottom:3.6rem;

`;
const SubContainer = styled.div`
  max-width: 100%;
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% 17%;
  justify-content: space-between;
  /* border:1px solid red; */
  h1 {
    font-size: 37px;
    font-weight: lighter;
    margin-top:0;
    color:#FFFFFF;
  }

`;
const Images = styled.div`
display: flex;
flex-direction: column;
row-gap: 8px;
margin-top:5px;
img{
        width:152px;
}
`;
export default Hero;
