import React from "react";
import styled from "styled-components";
import ServicesNavbar from "./ServicesNavbar";

function PaymentSummary() {
  return (
    <>
      <ServicesNavbar service="Airtime" />
      <Container>
        <SubContainer>
          <Title>Your Order</Title>
          <Card>
            <div className="text-left">
              <p>Operator</p>
              <p>Phone Number</p>
              <p>Top-up Amount</p>
            </div>
            <div className="text-right">
              <p>MTN</p>
              <p>+234 9065706757</p>
              <p>₦ 100</p>
            </div>
          </Card>
        </SubContainer>
        <SubContainer>
          <Title> Order Summary</Title>
          <Card>
            <div className="text-left">
              <p>Service Price</p>
              <p>Jumia Discount</p>
              <p>Service Fee</p>
              <p>Final Price</p>
            </div>
            <div className="text-right">
              <p>₦ 100.00</p>
              <p>₦ 0.00</p>
              <p>₦ 0.00</p>
              <p className="total">₦ 100.00</p>
            </div>
          </Card>
        </SubContainer>
        <Title> Do you have a JumiaPay voucher / promo code?</Title>
        <Button>Continue to Login</Button>
        <CopyRight>2022 JumiaPay - All Rights Reserved</CopyRight>
      </Container>
    </>
  );
}
const Container = styled.div`
  max-width: 100%;
  width: 580px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom: 1rem;
`;
const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #378ef9;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  div {
    p {
      line-height: 15px;
    }
  }
`;
const Button = styled(Card)`
  justify-content: center;
  font-size: 14px;
  background-color: #378ef9;
  color: #fff;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
`;

const CopyRight = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
`;
export default PaymentSummary;
