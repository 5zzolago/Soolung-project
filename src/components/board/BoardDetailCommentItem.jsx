import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "../button/Button";
import { validateComment } from "../../utils/validate";
import { now } from "../../utils/date";
import {
  __editDetailComment,
  __deleteDetailComment,
} from "../../store/modules/boardDetailCommentSlice";

const BoardDetailComment = ({ boardComment }) => {
  const { id, username, body, createdDate, password } = boardComment;
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditClick, setIsEditClick] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editPassword, setEditPassword] = useState("");
  const [newCommentBody, setNewCommentBody] = useState("");

  const handleCommentUpdateToggle = () => {
    setIsEditOpen(true);
    setEditPassword("");
  };

  const handleCommentDeleteModal = () => {
    setIsDelete(!isDelete);
    setEditPassword("");
  };

  const handleEditModalClose = () => setIsEditOpen(false);
  const handleEditModalChange = (e) => setEditPassword(e.target.value);

  const handleModalCheckPasswordClick = () => {
    if (password === editPassword) {
      setIsEditOpen(false);
      !isDelete ? setIsEditClick(true) : handleCommentDelete();
    } else {
      alert("비밀번호가 틀렸습니다.");
      editPassword("");
      return;
    }
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const isVaildComment = validateComment(newCommentBody);
    if (!isVaildComment) {
      alert("댓글은 1자리 이상 50자리 미만으로 입력해주세요.");
      return;
    }
    const newComments = {
      id: id,
      body: newCommentBody,
    };

    dispatch(__editDetailComment(newComments));
    setIsEditClick(false);
  };

  const handleCommentDelete = () => {
    dispatch(__deleteDetailComment(id));
  };

  const handleNewCommentBodyChange = (e) => {
    setNewCommentBody(e.target.value);
  };

  return (
    <CommentsWrapper>
      <DetailContainer>
        <DetailMainBox>
          <DetailUserNameBox>
            <DetailUserName>{username}</DetailUserName>
          </DetailUserNameBox>
          {!isEditClick && (
            <DetailBtnBox>
              <DetailUpdateBtn onClick={handleCommentUpdateToggle}>
                <FontAwesomeIcon icon={faPenToSquare} color={"#aaa"} />
              </DetailUpdateBtn>
              <DetailDeleteBtn onClick={handleCommentDeleteModal}>
                <FontAwesomeIcon icon={faXmark} color={"#aaa"} />
              </DetailDeleteBtn>
            </DetailBtnBox>
          )}
        </DetailMainBox>
        <DetailCommentBox>
          {!isEditClick ? (
            <DetailCommentText>{body}</DetailCommentText>
          ) : (
            <DetailForm onSubmit={handleEditFormSubmit}>
              <TextField
                id={id}
                name="comment"
                label="어떤 이야기를 나누고 싶으신가요?"
                fullWidth
                multiline
                rows={1.5}
                value={newCommentBody}
                onChange={handleNewCommentBodyChange}
              />
              <Button
                btnType={"cancleEditingArticleComment"}
                type="button"
                outline={true}
                handler={setIsEditClick}
                text={"취소"}
              />
              <Button btnType={"submitArticle"} type="submit" text={"수정"} />
            </DetailForm>
          )}
        </DetailCommentBox>
        <DetailCreatAtBox>
          <ArticleDetailCreateAt>{now(createdDate)}</ArticleDetailCreateAt>
        </DetailCreatAtBox>
      </DetailContainer>
      <Modal
        open={isEditOpen || isDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DetailModalBox>
            <DeatilModalTextBox>
              <ArticleDetailModalText>
                {isEditOpen ? "수정" : "삭제"}하시려면 비밀번호를 입력해주세요
              </ArticleDetailModalText>
            </DeatilModalTextBox>
            <DeatilModalBtnBox>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                value={editPassword}
                onChange={handleEditModalChange}
                autoComplete="current-password"
              />
              <Button
                btnType={"closeEditingArticleCommentModal"}
                size={"quaternary"}
                outline={true}
                handler={handleEditModalClose}
                height={"secondary"}
                text={"취소"}
              />
              <Button
                btnType={"checkArticleCommentPassword"}
                size={"quaternary"}
                height={"secondary"}
                handler={handleModalCheckPasswordClick}
                text={"확인"}
              />
            </DeatilModalBtnBox>
          </DetailModalBox>
        </Box>
      </Modal>
    </CommentsWrapper>
  );
};

const CommentsWrapper = styled.div`
  width: 100%;
`;

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 2rem;
  padding-bottom: 1.3rem;
  border-bottom: solid #d3d3d3 2px;
`;

const DetailMainBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const DetailForm = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const DetailBtnBox = styled.div`
  width: 10%;
`;

const DetailUpdateBtn = styled.button`
  font-size: 1.5rem;
  margin-right: 1.5rem;
  border: 0;
  background-color: transparent;
`;

const DetailDeleteBtn = styled.button`
  font-size: 1.7rem;
  border: 0;
  background-color: transparent;
`;

const DetailUserNameBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const DetailUserName = styled.p`
  margin: 0;
  font-weight: bold;
`;

const DetailCommentBox = styled.div`
  width: 100%;
`;

const DetailCommentText = styled.p`
  font-weight: 400;
`;

const DetailCreatAtBox = styled.div`
  width: 100%;
`;

const ArticleDetailCreateAt = styled.p`
  font-weight: lighter;
`;

const DetailModalBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DeatilModalTextBox = styled.div`
  width: 100%;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
`;

const ArticleDetailModalText = styled.p`
  font-weight: 100%;
  text-align: center;
`;

const DeatilModalBtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

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

export default BoardDetailComment;
