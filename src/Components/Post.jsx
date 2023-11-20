import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 30px;
  border-bottom: 2px solid #f7f7f7;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  flex: 1;
`;
const Description = styled.div`
  margin-top: 20px;
  color: #939393;
  font-size: 20px;
  font-weight: 500;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
const Adjective = styled.div`
  color: #2f98ec;
  font-size: 18px;
`;
const LeftFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
const AddedBy = styled.div`
  color: #ababab;
  margin-left: 4px;
`;

const Dot = styled.div`
  font-size: 20px;
  padding-bottom: 8px;
  color: #a4a4a4;
  margin: 0 4px;
`;

const RightFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightFooterText = styled.div`
  color: #a4a4a4;
`;
const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  border-radius: 50%;
  padding: 4px;
  &.like {
    background-color: #e9af1c;
  }
  cursor: pointer;
`;
function Post({
  id,
  title,
  description,
  adjective,
  addedBy,
  addedDate,
  time,
  views,
}) {
  return (
    <React.Fragment key={id}>
      <Container>
        <Header>
          <Title>{title}</Title>
          <Icon icon={faThumbsUp} className="like" />
        </Header>
        <Description>{description}</Description>
        <Footer>
          <LeftFooter>
            <Adjective>{adjective}</Adjective> <AddedBy> by {addedBy}</AddedBy>
          </LeftFooter>
          <RightFooter>
            <RightFooterText>{addedDate}</RightFooterText>
            <Dot>.</Dot>
            <RightFooterText>{time}</RightFooterText>
            <Dot>.</Dot>
            <RightFooterText>{views} Views</RightFooterText>
          </RightFooter>
        </Footer>
      </Container>
    </React.Fragment>
  );
}

Post.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  addedBy: propTypes.string,
  addedDate: propTypes.string,
  adjective: propTypes.string,
  description: propTypes.string,
  likedByCurrentUser: propTypes.bool,
  time: propTypes.string,
  views: propTypes.number,
};
export default Post;
