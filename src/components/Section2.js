import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Section2() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Lists>
          <span>3% CASHBACK</span>
          <span>3% CASHBACK</span>
          <span>#0 FEE</span>
          <span>#0 FEE</span>
          <span>#0 FEE</span>
        </Lists>
        <ServiceContainer>
          <Services>
            <img
              src="./images/icons/airtime.png"
              alt=""
              onClick={() => navigate("airtime")}
            />
            <p onClick={() => navigate("airtime")}>Airtime</p>
          </Services>
          <Services>
            <img src="./images/icons/data.png" alt="" />
            <p>Data</p>
          </Services>
          <Services>
            <img src="./images/icons/electricity.png" alt="" />
            <p>Electricity</p>
          </Services>
          <Services>
            <img src="./images/icons/betting.png" alt="" />
            <p>Betting</p>
          </Services>
          <Services>
            <img src="./images/icons/internet.png" alt="" />
            <p>Internet</p>
          </Services>
          <Services>
            <span></span>
            <img src="./images/icons/international.png" alt="" />
            <p>International</p>
          </Services>
        </ServiceContainer>
      </Container>
    </div>
  );
}
const Container = styled.div`
  max-width: 100%;
  width: 900px;
  padding-top: 10px;
  padding-left: 5px;
  margin: 2.5rem auto;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
`;
const ServiceContainer = styled.div`
  display: flex;
  column-gap: 3.5rem;
  padding-left: 1.5rem;
`;
const Services = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    align-self: center;
    justify-self: center;
  }
  p {
    margin-left: 3px;
    font-size: 13px;
  }
`;
const Lists = styled.div`
  display: flex;
  column-gap: 1.5rem;

  span {
    font-size: 11px;
    font-weight: bolder;
    background-color: #fff0e6;
    color: #f68b19;
    padding: 3px;
    border-radius: 25px;
    margin-left: 5px;
  }
`;
export default Section2;
