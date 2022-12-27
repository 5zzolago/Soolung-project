import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import BoardDetailCommentWrite from "../components/board/BoardDetailCommentWrite";
import { now } from "../utils/date";

const BoardDetailPage = () => {
  const [postData, setPostData] = useState([]);
  const id = useParams().boardId;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/board?id=${id}`)
      .then((response) => {
        setPostData(response.data);
      });
  }, []);
  const post = postData[0];

  return (
    <BoardDetailWrap>
      <BoardDetailHeader>
        <BoardDetailTitleContainer>
          <BoardDetailTitleName>{post?.title}</BoardDetailTitleName>
          <BoardDetailNameAt>
            <BoardDetailNickName>by. {post?.username}</BoardDetailNickName>
            <BoardDetailCreateAt>{now(post?.createdDate)}</BoardDetailCreateAt>
          </BoardDetailNameAt>
        </BoardDetailTitleContainer>
        <BoardEdtingBtnContainer>
          <BoardIconWrapper>
            <FontAwesomeIcon icon={faPenToSquare} color={"#aaa"} />
          </BoardIconWrapper>
          <BoardIconWrapper>
            <FontAwesomeIcon icon={faXmark} color={"#aaa"} />
          </BoardIconWrapper>
        </BoardEdtingBtnContainer>
      </BoardDetailHeader>
      <BoardDetailPostingContainer>
        <BoardDetailImage>
          <img src={post?.img} alt="이미지" />
        </BoardDetailImage>
        <BoardDetailDesc>
          {post?.body}
        </BoardDetailDesc>
        <BoardDetailCommentWrite />
      </BoardDetailPostingContainer>
    </BoardDetailWrap>
  );
};

const BoardDetailWrap = styled.div`
  width: 100%;
`;
const BoardDetailTitleContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const BoardDetailTitleName = styled.h1`
  color: #101010;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoardDetailNameAt = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  color: #555;
`;

const BoardDetailNickName = styled.p`
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoardDetailCreateAt = styled.p`
  margin-left: 3rem;
`;

const BoardDetailPostingContainer = styled.div`
  width: 100%;
`;

const BoardDetailImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0 1rem;

  img {
    display: block;
  }
`;

const BoardDetailDesc = styled.p`
  color: #555;
  font-size: 1.1rem;
  margin: 4rem 0 8rem;
  padding: 0 5rem;
`;

const BoardDetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin-top: 5rem;
`;

const BoardEdtingBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoardIconWrapper = styled.div`
  font-size: 28px;
  cursor: pointer;

  &:first-child {
    margin-right: 1.6rem;
  }
`;

export default BoardDetailPage;
