import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  __getArticleComment,
  __createArticleComment,
  __deleteArticleComment,
} from "../store/modules/articleCommentSlice";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useForm from "../hooks/useForm";
import ArticleDetailHeader from "../components/article/ArticleDetailHeader";
import ArticleDetailCommentWrite from "../components/article/ArticleDetailCommentWrite";
import styled from "styled-components";

const initialState = {
  username: "",
  password: "",
  comment: "",
  star: 0,
};

const ArticleDetailPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // const [articleDatas, setArticleDatas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [pwValue, setPwValue] = useState("");
  const [articleId, setArticleId] = useState("");
  const { isLoading, error, articleComment } = useSelector(
    (state) => state.articleComment
  );
  const [articleFormData, handleFormValueChange] = useForm(initialState);
  const [articleEditValue, handleEditValueChange] = useForm({ comment: "" });

  useEffect(() => {
    dispatch(__getArticleComment());
    // setArticleDatas(location.state);
  }, [dispatch, location]);

  const handlePasswordChange = (e) => setPwValue(e.target.value);
  const handleModalClose = () => setIsOpen(false);
  const handleArticleFormSubmit = (e) => {
    e.preventDefault();
    if (
      articleFormData.username.trim() === "" ||
      articleFormData.password.trim() === "" ||
      articleFormData.comment.trim() === ""
    ) {
      alert("빈칸을 입력해주세요.");
      return;
    }
    const obj = {
      ...articleFormData,
      id: uuidv4(),
      createdDate: "2022-12-23",
      alcoholId: "not",
    };
    dispatch(__createArticleComment(obj));

    articleFormData.username = "";
    articleFormData.password = "";
    articleFormData.comment = "";
    articleFormData.star = 0;
  };

  const handleCommentDelete = (id) => () => {
    setIsOpen(true);
    setArticleId(id);
  };

  const handleModalCheckPasswordClick = () => {
    const res = articleComment.filter((item) => item.password === pwValue);
    if (res.length > 0) {
      dispatch(__deleteArticleComment(articleId));
      setPwValue("");
      setIsOpen(false);
    } else {
      alert("비밀번호가 틀렸습니다.");
      setIsOpen(false);
      return;
    }
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ArticleDetailWrap>
      <ArticleDetailHeader />
      <ArticleDetailCommentWrite
        articleFormData={articleFormData}
        articleComment={articleComment}
        articleEditValue={articleEditValue}
        onFormValueChangeEvent={handleFormValueChange}
        onEditValueChangeEvent={handleEditValueChange}
        onCommentDeleteEvent={handleCommentDelete}
        onArticleFormSubmitEvent={handleArticleFormSubmit}
      />
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ArticleDetailModalBox>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              size="small"
              value={pwValue}
              onChange={handlePasswordChange}
              autoComplete="current-password"
            />
            <ArticleDetailModalBtn
              variant="outlined"
              onClick={handleModalCheckPasswordClick}
            >
              확인
            </ArticleDetailModalBtn>
            <ArticleDetailModalBtn
              variant="outlined"
              onClick={handleModalClose}
            >
              취소
            </ArticleDetailModalBtn>
          </ArticleDetailModalBox>
        </Box>
      </Modal>
    </ArticleDetailWrap>
  );
};

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

const ArticleDetailWrap = styled.div`
  width: 100%;
`;

const ArticleDetailModalBox = styled.div`
  width: 100%;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
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

export default ArticleDetailPage;
