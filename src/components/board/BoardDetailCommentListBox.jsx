// TodoList.jsx 같은 역할
// 댓글삭제 누르는 곳

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { __deleteDetailComment } from "../../store/modules/boardDetailCommentSlice";
import BoardDetailCommentItem from "./BoardDetailCommentItem";

function BoardDetailCommentListBox({ boardId, boardDetailComment }) {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [BoardModalPwValue, setBoardModalPwValue] = useState("");

  const handleBoardModalPwChange = (e) => setBoardModalPwValue(e.target.value);

  const handleModalDeleteClick = (id) => {
    dispatch(__deleteDetailComment);
  };

  return (
    <StyledCommentListContainer>
      {/* // 댓글 삭제 눌렀을 때 모달창 */}

      <h3>Comments</h3>
      {boardDetailComment
        .filter((item) => {
          return boardId === item.boardId;
        })
        .map(
          (item) => (
            <BoardDetailCommentItem
              key={item.id}
              boardComment={item}
              onCommentDelete={handleModalDeleteClick}
            />
          )
          //   return (
          // <StyledCommentListBox>
          //   <h4>{item.nickname}</h4>
          //   <p>{item.commentPassword}</p>
          //   <p>{item.onBoardComment}</p>
          //   <input
          //     type="password"
          //     value={pwValue}
          //     onChange={handlePwValueChange}
          //     placeholder="비밀번호를 입력하세요."
          //   />

          //   <button onClick={() => isOpenEditClick(item.id)}>수정</button>

          //   <button onClick={() => handleDeleteDetailCommentClick(item.id)}>
          //     삭제
          //   </button>
          // </StyledCommentListBox>
          //   );
        )}
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
