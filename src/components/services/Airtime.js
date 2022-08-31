import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export class Airtime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
      number: false,
      amount: false,
      errorDisplay: false,
      inputAmountErrorDisplay: false,
    };
  }

  handleFormDisplay = () => {
    this.setState({ display: true });
  };
  handleInputClick = (e) => {
    e.target.placeholder = "";
    e.target.type = "number";
    this.setState({ [e.target.name]: true });
  };
  verifyInputAmount = (e) => {
    Number(e.target.value) < 50
      ? this.setState({ inputAmountErrorDisplay: true })
      : this.setState({ inputAmountErrorDisplay: false });
  };
  inputNumberVerification = (e) => {
    const inputValue = e.target.value;
    const numArr = [90, 91, 80, 81, 70, 71];
    const firstTwoInputNumbers = inputValue[0] + inputValue[1];
    console.log(firstTwoInputNumbers);
    if (
      numArr.includes(Number(firstTwoInputNumbers)) &&
      inputValue.length === 10
    ) {
      this.setState({ errorDisplay: false });
    } else {
      this.setState({ errorDisplay: true });
    }
  };

  render() {
    const { display, number, amount, errorDisplay, inputAmountErrorDisplay } =
      this.state;
    return (
      <>
        <Navbar />
        <Container>
          <ServiceContainer>
            <h3>Airtime</h3>
            <Card1>
              <CardTitle>WHAT IS YOUR OPERATION?</CardTitle>
              <SubCard>
                <div>
                  <Images onClick={this.handleFormDisplay}>
                    <img src="./images/airtime/mtn.png" alt="" />
                  </Images>
                  <ImageTitle>MTN</ImageTitle>
                </div>
                <div>
                  <Images onClick={this.handleFormDisplay}>
                    <img src="./images/airtime/airtel.png" alt="" />
                  </Images>
                  <ImageTitle>Airtel</ImageTitle>
                </div>
                <div>
                  <Images onClick={this.handleFormDisplay}>
                    <img src="./images/airtime/9mobile.png" alt="" />
                  </Images>
                  <ImageTitle>9mobile</ImageTitle>
                </div>
                <div>
                  <Images onClick={this.handleFormDisplay}>
                    <img src="./images/airtime/glo.png" alt="" />
                  </Images>
                  <ImageTitle>Glo</ImageTitle>
                </div>
              </SubCard>
            </Card1>
            <div className={display ? "" : "hidden"}>
              <Card1>
                <CardTitle>WHAT IS YOUR PHONE NUMBER?</CardTitle>
                <SubCard>
                  <div className="code">
                    <p className="country">Country</p>
                    <span className="country-code">+234</span>
                  </div>
                  <form className="form">
                    <div className={number ? "" : "visibility-hidden"}>
                      <p className="number-placeholder">Phone Number</p>
                    </div>

                    <input
                      type="text"
                      name="number"
                      placeholder="Phone Number"
                      onClick={this.handleInputClick}
                      onChange={this.inputNumberVerification}
                    />
                    <p className="error-message">
                      {errorDisplay ? "Invalid Phone Number" : ""}
                    </p>
                  </form>
                </SubCard>
              </Card1>
              <Card1>
                <CardTitle>HOW MUCH DO YOU WANT TO TOP-UP?</CardTitle>
                <SubCard>
                  <div className="code">
                    <p className="country">Currency</p>
                    <span className="country-code">NGN</span>
                  </div>
                  <form className="form">
                    <div className={amount ? "" : "visibility-hidden"}>
                      <p className="number-placeholder">Top-up Amount</p>
                    </div>
                    <input
                      type="text"
                      name="amount"
                      placeholder="Top-up Amount"
                      onChange={this.verifyInputAmount}
                      onFocus={this.handleInputClick}
                    />
                    <p className="error-message">
                      {inputAmountErrorDisplay
                        ? "Minimum top-up amount is  #50"
                        : ""}
                    </p>
                  </form>
                </SubCard>
              </Card1>

              <Link to="/order-summary">
                <Button>NEXT</Button>
              </Link>
            </div>
          </ServiceContainer>
          <Description>
            <div>
              <img src="./images/airtime/airtime-phone.png" alt="" />
            </div>
            <span>Get Instant Airtime with Zero Stress</span>
            <p>
              Enjoy Speedy Airtime recharge - You Can Get Airtime in a Few
              Clicks with JumiaPay Nigeria - MTN, Glo, Airtel and 9Mobile.
            </p>
          </Description>
        </Container>
      </>
    );
  }
}

const Button = styled.button`
  width: 100%;
  text-align: center;
  padding: 10px 20px;
  margin-top: 1.5rem;
  font-size: 18px;
  background-color: #378ef9;
  border: none;
  border-radius: 2px;
  color: #ffffff;
`;
const Card1 = styled.div``;
const CardTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #378ef9;
  line-height: 0;
  margin-top: 2rem;
`;
const SubCard = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  border-radius: 6px;
  padding-bottom: 10px;
`;

const Images = styled.div`
  padding-top: 1.3rem;
  img {
    width: 44px;
    height: 44px;
    /* border: 2px solid red; */
    border-radius: 6px;
    cursor: pointer;
  }
`;
const ImageTitle = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
`;
const Container = styled.div`
  max-width: 100%;
  width: 900px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 360px 524px;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }

  /* border: 1px solid red; */
`;
const ServiceContainer = styled.div`
  /* border: 1px solid red; */
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  h3 {
    color: rgba(0, 0, 0, 0.8);
  }
 
`;
const Description = styled(ServiceContainer)`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  row-gap: 1rem;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;

    img {
      width: 37.91px;
    }
  }
  span {
    font-size: 20px;
    font-weight: bolder;
    line-height: 10px;
  }
  p {
    margin-top: 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    word-spacing: 1px;
    line-height: 25px;
  }
`;
export default Airtime;
