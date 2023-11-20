import React from "react";
import Post from "./Post";
import data from "../assets/data.json";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;
const PostCounter = styled.div`
  color: #2f98ec;
  border-top: 2px solid #f7f7f7;
  border-right: 2px solid #f7f7f7;
  min-width: 90px;
  width: auto;
  text-align: center;
  height: 25px;
  font-size: 22px;
  padding: 5px 20px;
  font-weight: 700;
`;
const RightSeparator = styled.div`
  border-bottom: 2px solid #f7f7f7;
  width: 100%;
`;
const PostContainer = styled.div``;
function Posts() {
  const { posts } = data;
  return (
    <React.Fragment>
      <Container>
        <PostCounter>
          {posts?.length} {posts?.length > 1 ? "Posts" : "Post"}
        </PostCounter>
        <RightSeparator />
      </Container>
      <PostContainer>
        {posts.map(
          ({
            id,
            title,
            addedBy,
            addedDate,
            adjective,
            description,
            likedByCurrentUser,
            time,
            views,
          }) => (
            <React.Fragment key={id}>
              <Post
                id={id}
                title={title}
                description={description}
                adjective={adjective}
                likedByCurrentUser={likedByCurrentUser}
                addedBy={addedBy}
                addedDate={addedDate}
                time={time}
                views={views}
              />
            </React.Fragment>
          )
        )}
      </PostContainer>
    </React.Fragment>
  );
}

export default Posts;
