import React, { useState } from "react";
import { __updateArticleComment } from "../../store/modules/articleCommentSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { validateComment } from "../../utils/validate";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Button from "../button/Button";

const ArticleDetailComment = ({
  articleComment,
  articleEditValue,
  onCommentDeleteEvent,
  onEditValueChangeEvent,
}) => {
  const { id, username, comment, star, createdDate, password } = articleComment;
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditClick, setIsEditClick] = useState(false);
  const [editPassword, setEditPassword] = useState("");

  const handleArticleUpdateToggle = () => {
    setIsEditOpen(true);
    articleEditValue.comment = "";
  };

  const handleEditModalClose = () => setIsEditOpen(false);
  const handleEditModalChange = (e) => setEditPassword(e.target.value);

  const handleModalCheckPasswordClick = () => {
    if (password === editPassword) {
      setIsEditOpen(false);
      setIsEditClick(true);
    } else {
      alert("비밀번호가 틀렸습니다.");
      return;
    }
    articleEditValue.comment = comment;
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const isVaildComment = validateComment(articleEditValue.comment);
    if (!isVaildComment) {
      alert("댓글은 1자리 이상 50자리 미만으로 입력해주세요.");
      return;
    }
    dispatch(__updateArticleComment([id, articleEditValue]));
    setIsEditClick(false);
  };

  return (
    <ArticleDetailWrap>
      <ArticleDetailContainer>
        <ArticleDetailMainBox>
          <ArticleDetailUserNameBox>
            <ArticleDetailUserName>{username}</ArticleDetailUserName>
            <Rating name="read-only" value={Number(star)} readOnly />
          </ArticleDetailUserNameBox>
          <ArticleDetailBtnBox>
            <ArticleDetailUpdateBtn onClick={handleArticleUpdateToggle}>
              <FontAwesomeIcon icon={faPenToSquare} color={"#aaa"} />
            </ArticleDetailUpdateBtn>
            <ArticleDetailDeleteBtn onClick={onCommentDeleteEvent(id)}>
              <FontAwesomeIcon icon={faXmark} color={"#aaa"} />
            </ArticleDetailDeleteBtn>
          </ArticleDetailBtnBox>
        </ArticleDetailMainBox>
        <ArticleDetailCommentBox>
          {isEditClick === false ? (
            <ArticleDetailCommentText>{comment}</ArticleDetailCommentText>
          ) : (
            <ArticleDetailForm onSubmit={handleEditFormSubmit}>
              <TextField
                id={id}
                name="comment"
                label="어떤 이야기를 나누고 싶으신가요?"
                fullWidth
                multiline
                rows={1.5}
                value={articleEditValue.comment}
                onChange={onEditValueChangeEvent}
              />
              <Button
                btnType={"cancleEditingArticleComment"}
                type="button"
                outline={true}
                handler={setIsEditClick}
                text={"취소"}
              />
              <Button btnType={"submitArticle"} type="submit" text={"수정"} />
            </ArticleDetailForm>
          )}
        </ArticleDetailCommentBox>
        <ArticleDetailCreatAtBox>
          <ArticleDetailCreateAt>{createdDate}</ArticleDetailCreateAt>
        </ArticleDetailCreatAtBox>
      </ArticleDetailContainer>
      <Modal
        open={isEditOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ArticleDetailModalBox>
            <ArticleDeatilModalTextBox>
              <ArticleDetailModalText>
                수정하시려면 비밀번호를 입력해주세요
              </ArticleDetailModalText>
            </ArticleDeatilModalTextBox>
            <ArticleDeatilModalBtnBox>
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
            </ArticleDeatilModalBtnBox>
          </ArticleDetailModalBox>
        </Box>
      </Modal>
    </ArticleDetailWrap>
  );
};

const ArticleDetailWrap = styled.div`
  width: 100%;
`;

const ArticleDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 2rem;
  padding-bottom: 1.3rem;
  border-bottom: solid #d3d3d3 2px;
`;

const ArticleDetailMainBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ArticleDetailForm = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const ArticleDetailBtnBox = styled.div`
  width: 10%;
`;

const ArticleDetailUpdateBtn = styled.button`
  font-size: 1.5rem;
  margin-right: 1.5rem;
  border: 0;
  background-color: transparent;
`;

const ArticleDetailDeleteBtn = styled.button`
  font-size: 1.7rem;
  border: 0;
  background-color: transparent;
`;

const ArticleDetailUserNameBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ArticleDetailUserName = styled.p`
  margin: 0;
  font-weight: bold;
`;

const ArticleDetailCommentBox = styled.div`
  width: 100%;
`;

const ArticleDetailCommentText = styled.p`
  font-weight: 400;
`;

const ArticleDetailCreatAtBox = styled.div`
  width: 100%;
`;

const ArticleDetailCreateAt = styled.p`
  font-weight: lighter;
`;

const ArticleDetailModalBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArticleDeatilModalTextBox = styled.div`
  width: 100%;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
`;

const ArticleDetailModalText = styled.p`
  font-weight: 100%;
  text-align: center;
`;

const ArticleDeatilModalBtnBox = styled.div`
  width: 100%;
  display: flex;
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

export default ArticleDetailComment;
