import React from "react";
import styled from "styled-components";
import CommonSections from "./CommonSections";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import {
  content1,
  content2,
  content3,
  content4,
  content5,
} from "./CommonSecContents";
import Footer from "./Footer";


function Home() {
 
  
  return (
    <>
      <HeroSection>
        <Navbar />
        <Hero />
      </HeroSection>
      <Section1 />
      <Section2 />
      <Title>TV</Title>
      <Container>
        <ServiceContainer>
          {content1.map((item, i) => (
            <CommonSections
              image={item.image}
              service={item.service}
              key={i}
              
            />
          ))}
        </ServiceContainer>
      </Container>

      <Title>VOUCHERS. SUBSCRIPTIONS</Title>
      <Container>
        <ServiceContainer>
          {content2.map((item, i) => (
            <CommonSections image={item.image} service={item.service} key={i} />
          ))}
        </ServiceContainer>
      </Container>
      <Title>LIFESTYLE OFFERINGS</Title>

      <Container>
        <ServiceContainer>
          {content3.map((item, i) => (
            <CommonSections image={item.image} service={item.service} key={i} />
          ))}
        </ServiceContainer>
      </Container>
      <Title>VOUCHERS. SUBSCRIPTIONS</Title>
      <Container>
        <ServiceContainer>
          {content4.map((item, i) => (
            <CommonSections image={item.image} service={item.service} key={i} />
          ))}
        </ServiceContainer>
      </Container>
      <Title>GOVERNMENT. DONATIONS. PERSONAL</Title>
      <Container>
        <ServiceContainer2>
          {content5.map((item, i) => (
            <CommonSections image={item.image} service={item.service} key={i} />
          ))}
        </ServiceContainer2>
      </Container>
      <Footer />
    </>
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
const ServiceContainer2 = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: space-around;
`;
const Title = styled.p`
  max-width: 100%;
  font-weight: bolder;
  font-size: 14px;
  width: 900px;
  margin: 0 auto;
  color: #378ef9;
  line-height: 0;
  margin-bottom: -1.2rem;
`;
const HeroSection = styled.div``;

export default Home;
