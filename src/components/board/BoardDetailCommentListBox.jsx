// TodoList.jsx 같은 역할

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function BoardDetailCommentListBox() {
  const boardDetailCommentList = useSelector(
    (state) => state.boardDetailCommentSlice.boardDetailComment
  );

  console.log("boardDetailCommentList", boardDetailCommentList);

  const handleDeleteDetailComment = () => {
    alert("삭제 test");
  };

  return (
    <StyledCommentListContainer>
      <h3>Comments</h3>
      {boardDetailCommentList.map((item) => {
        return (
          <StyledCommentListBox>
            <h4>{item.nickname}</h4>
            <p>{item.commentPassword}</p>
            <p>{item.onBoardComment}</p>
            <button>수정</button>
            <button onClick={handleDeleteDetailComment}>삭제</button>
          </StyledCommentListBox>
        );
      })}
    </StyledCommentListContainer>
  );
}

export default BoardDetailCommentListBox;

const StyledCommentListContainer = styled.div`
  width: 100%;
`;

const StyledCommentListBox = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
`;
