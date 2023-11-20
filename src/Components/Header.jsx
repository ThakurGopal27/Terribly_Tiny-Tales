import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
const Container = styled.div`
  background-color: #000;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  margin-left: 50px;
`;

const Img = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const Label = styled.div`
  color: #fff;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const Separator = styled.div`
  border-left: 2px solid #77674e;
  margin-left: 10px;
  width: 5px;
  height: 30px;
`;

const RightContainer = styled.div`
  margin-right: 20px;
`;

const Button = styled.button`
  background-color: #fbc343;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

function Header() {
  return (
    <React.Fragment>
      <Container>
        <LeftContainer>
          <Img src={logo} alt="Terribly Tiny Tales" />
          <Separator></Separator>
          <Label>stories</Label>
        </LeftContainer>
        <RightContainer>
          <Button>Courses</Button>
        </RightContainer>
      </Container>
    </React.Fragment>
  );
}

export default Header;
