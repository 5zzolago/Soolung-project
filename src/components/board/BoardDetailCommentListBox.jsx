import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { __deleteDetailComment } from "../../store/modules/boardDetailCommentSlice";
import BoardDetailCommentItem from "./BoardDetailCommentItem";
import NoContent from "../error/NoContent";

function BoardDetailCommentListBox({ boardId, boardDetailComment }) {
  const dispatch = useDispatch();
  const handleModalDeleteClick = (id) => {
    dispatch(__deleteDetailComment);
  };

  const handleBoardCommentList = () => {
    const currentBoardComments = boardDetailComment.filter(
      (item) => boardId === item.boardId
    );
    return currentBoardComments.length === 0 ? (
      <NoContent />
    ) : (
      boardDetailComment
        .filter((item) => {
          return boardId === item.boardId;
        })
        .map((item) => (
          <BoardDetailCommentItem
            key={item.id}
            boardComment={item}
            onCommentDelete={handleModalDeleteClick}
          />
        ))
    );
  };

  return (
    <StyledCommentListContainer>
      {/* // 댓글 삭제 눌렀을 때 모달창 */}
      <h3>Comments</h3>
      {handleBoardCommentList()}
    </StyledCommentListContainer>
  );
}

export default BoardDetailCommentListBox;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "13%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "2rem",
  boxShadow: 24,
  p: 4,
};

const ArticleDetailModalBox = styled.div`
  width: 100%;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
`;

const StyledCommentListContainer = styled.div`
  width: 100%;
`;

const StyledCommentListBox = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
`;

const ArticleDetailModalBtn = styled.button`
  width: 13%;
  height: 2.4rem;
  border-radius: 0.5rem;
  color: white;
  background-color: #434343;
  font-weight: bold;
  cursor: pointer;
`;
