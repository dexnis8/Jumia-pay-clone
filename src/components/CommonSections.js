import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function CommonSections(props) {
  const navigate = useNavigate();
  return (
    <>
      <Services onClick={() => navigate("airtime")}>
        <img src={props.image} alt="" />
        <p onClick={() => navigate("airtime")}>{props.service}</p>
      </Services>
    </>
  );
}

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
export default CommonSections;
