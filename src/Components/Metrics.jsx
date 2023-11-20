import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsUp,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
  margin-top: 10px;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;
const Counter = styled.span`
  margin-left: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  border-radius: 50%;
  padding: 4px;
  &.star {
    background-color: #63a9b1;
  }
  &.like {
    background-color: #e9af1c;
  }
  &.view {
    background-color: #828282;
  }
  &.loved {
    background-color: #c52659;
  }
`;

function Metrics({ star, likes, loved, views }) {
  return (
    <React.Fragment>
      <Container>
        <IconContainer>
          <Icon icon={faStar} className="star" />
          <Counter>{star}</Counter>
        </IconContainer>
        <IconContainer>
          <Icon icon={faThumbsUp} className="like" />
          <Counter>{likes}</Counter>
        </IconContainer>
        <IconContainer>
          <Icon icon={faEye} className="view" />
          <Counter>{views}</Counter>
        </IconContainer>
        <IconContainer>
          <Icon icon={faHeart} className="loved" />
          <Counter>{loved}</Counter>
        </IconContainer>
      </Container>
    </React.Fragment>
  );
}

Metrics.propTypes = {
  star: propTypes.any,
  likes: propTypes.any,
  views: propTypes.any,
  loved: propTypes.any,
};
export default Metrics;
