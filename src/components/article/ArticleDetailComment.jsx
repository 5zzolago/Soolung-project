import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
import styled from "styled-components";

const ArticleDetailComment = ({ articleComment }) => {
  const { id, username, comment, star, createdDate } = articleComment;
  return (
    <ArticleDetailWrap>
      <ArticleDetailContainer>
        <ArticleDetailMainBox>
          <ArticleDetailUserNameBox>
            <ArticleDetailUserName>{username}</ArticleDetailUserName>
            <Rating name="read-only" value={Number(star)} readOnly />
          </ArticleDetailUserNameBox>
          <ArticleDetailBtnBox>
            <ArticleDetailUpdateBtn>
              <FontAwesomeIcon icon={faPenToSquare} />
            </ArticleDetailUpdateBtn>
            <ArticleDetailDeleteBtn>
              <FontAwesomeIcon icon={faXmark} />
            </ArticleDetailDeleteBtn>
          </ArticleDetailBtnBox>
        </ArticleDetailMainBox>
        <ArticleDetailCommentBox>
          <ArticleDetailCommentText>{comment}</ArticleDetailCommentText>
        </ArticleDetailCommentBox>
        <ArticleDetailCreatAtBox>
          <ArticleDetailCreateAt>{createdDate}</ArticleDetailCreateAt>
        </ArticleDetailCreatAtBox>
      </ArticleDetailContainer>
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

export default ArticleDetailComment;
