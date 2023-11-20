import React from "react";
import wallpaper from "../assets/wallpaper.jpg";
import profile from "../assets/profile.jpeg";
import styled from "styled-components";
import data from "../assets/data.json";
import Metrics from "./Metrics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDiamond } from "@fortawesome/free-solid-svg-icons";
const Wallpaper = styled.img`
  width: 100%;
  aspect-ratio: 3/1;
`;
const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: 50px;
  border: 2px solid #95908e;
`;
const Container = styled.div`
  position: relative;
  top: -40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightContainer = styled.div`
  margin-left: 40px;
`;
const MetaData = styled.div`
  position: absolute;
  top: 50px;
`;
const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
const ChipsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const ChipsConainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chips = styled.div`
  min-width: 40px;
  width: auto;
  padding: 5px 15px;
  border: 2px solid #9f9f9f;
  margin-right: 15px;
  border-radius: 10px;
  color: #9f9f9f;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;
const ChipsLabel = styled.span`
  padding-top: 2px;
  color: #9f9f9f;
  padding-left: 5px;
`;

const BottomContainer = styled.div`
  margin-left: 50px;
`;
const Link = styled.span`
  color: #b5e9ed;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const Designation = styled.span`
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  color: #696969;
`;
const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  border-radius: 50%;
  padding: 4px;
  margin-left: 10px;
  &.diamond {
    background-color: #463173;
  }
  &.verified {
    background-color: #74dda1;
    color: #000;
  }
  cursor: pointer;
`;
const MetaHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Profile() {
  const {
    profile: {
      name,
      followers,
      following,
      designantion,
      instagram,
      star,
      likes,
      views,
      loved,
    },
  } = data;
  return (
    <React.Fragment>
      <Wallpaper src={wallpaper} />
      <Container>
        <ProfilePicture src={profile} />
        <RightContainer>
          <MetaData>
            <MetaHeader>
              <Name>{name}</Name>
              <Icon icon={faDiamond} className="diamond" />
              <Icon icon={faCheck} className="verified" />
            </MetaHeader>
            <ChipsWrapper>
              <ChipsConainer>
                <Chips>{followers}</Chips>
                <ChipsLabel>Followers</ChipsLabel>
              </ChipsConainer>
              <ChipsConainer>
                <Chips>{following}</Chips>
                <ChipsLabel>Following</ChipsLabel>
              </ChipsConainer>
            </ChipsWrapper>
          </MetaData>
        </RightContainer>
      </Container>
      <BottomContainer>
        <Designation>{designantion}</Designation>
        <br />
        <Link>{instagram}</Link>
      </BottomContainer>
      <Metrics star={star} likes={likes} views={views} loved={loved} />
    </React.Fragment>
  );
}

export default Profile;
