import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  __getArticleComment,
  __createArticleComment,
  __deleteArticleComment,
} from "../store/modules/articleCommentSlice";
import { __updateArticle } from "../store/modules/articleSlice";
import { validateUsername, validateComment } from "../utils/validate";
import { now } from "../utils/date";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "../components/button/Button";
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
  const [articleDatas, setArticleDatas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [pwValue, setPwValue] = useState("");
  const [articleId, setArticleId] = useState("");
  const { isLoading, error, articleComment } = useSelector(
    (state) => state.articleComment
  );
  const [articleFormData, , handleFormValueChange] = useForm(initialState);
  const [articleEditValue, , handleEditValueChange] = useForm({ comment: "" });

  useEffect(() => {
    dispatch(__getArticleComment());
    setArticleDatas(location.state);
  }, [dispatch, location]);

  const handlePasswordChange = (e) => setPwValue(e.target.value);
  const handleModalClose = () => setIsOpen(false);

  useEffect(() => {
    const stars = articleComment.filter(
      (cmt) => cmt.alcoholId === articleDatas.id
    );
    const totalStar = stars
      .map((s) => Number(s.star))
      ?.reduce((pre, cur) => pre + cur, 0);
    const averageStar = totalStar / stars.length;
    dispatch(
      __updateArticle([articleDatas.id, Number(averageStar).toFixed(1)])
    );
  }, [articleComment]);

  const handleArticleFormSubmit = async (e) => {
    e.preventDefault();
    const isVaildUsername = validateUsername(articleFormData.username);
    const isVaildComment = validateComment(articleFormData.comment);

    if (!isVaildUsername) {
      alert("??????????????? 2?????? ?????? 9?????? ???????????? ??????????????????.");
      return;
    }

    if (articleFormData.password.trim() === "") {
      alert("??????????????? ??????????????????.");
      return;
    }

    if (!isVaildComment) {
      alert("????????? 1?????? ?????? 50?????? ???????????? ??????????????????.");
      return;
    }

    const obj = {
      ...articleFormData,
      id: uuidv4(),
      createdDate: now(),
      alcoholId: articleDatas.id,
    };
    dispatch(__createArticleComment(obj));

    articleFormData.username = "";
    articleFormData.password = "";
    articleFormData.comment = "";
    articleFormData.star = 0;
  };

  const handleCommentDelete = (id) => () => {
    setIsOpen(true);
    setPwValue("");
    setArticleId(id);
  };

  const handleModalCheckPasswordClick = () => {
    const res = articleComment.filter((item) => item.password === pwValue);
    if (res.length > 0) {
      dispatch(__deleteArticleComment(articleId));
      setPwValue("");
      setIsOpen(false);
    } else {
      alert("??????????????? ???????????????.");
      setIsOpen(false);
      return;
    }
  };

  if (isLoading) {
    return <div>?????? ???...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <ArticleDetailWrap>
      <ArticleDetailHeader
        articleDatas={articleDatas}
        articleComment={articleComment}
      />
      <ArticleDetailCommentWrite
        articleFormData={articleFormData}
        articleDatas={articleDatas}
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
            <ArticleDeatilModalTextBox>
              <ArticleDetailModalText>
                ?????????????????? ??????????????? ??????????????????.
              </ArticleDetailModalText>
            </ArticleDeatilModalTextBox>
            <ArticleDeatilModalBtnBox>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                value={pwValue}
                onChange={handlePasswordChange}
                autoComplete="current-password"
              />
              <Button
                btnType={"closeEditingArticleCommentModal"}
                size={"quaternary"}
                outline={true}
                handler={handleModalClose}
                height={"secondary"}
                text={"??????"}
              />
              <Button
                btnType={"checkArticleCommentPassword"}
                size={"quaternary"}
                height={"secondary"}
                handler={handleModalCheckPasswordClick}
                text={"??????"}
              />
            </ArticleDeatilModalBtnBox>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
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
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export default ArticleDetailPage;
