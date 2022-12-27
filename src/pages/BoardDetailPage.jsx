import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import BoardDetailWrite from "../components/board/BoardDetailWrite";

const BoardDetailPage = () => {
  const [postData, setPostData] = useState([]);
  const id = useParams().boardId;
  useEffect(() => {
    axios.get(`http://localhost:8080/board?id=${id}`).then((response) => {
      setPostData(response.data);
    });
  }, []);
  const post = postData[0];

  return (
    <BoardDetailWrap>
      <BoardDetailTitleContainer>
        <BoardDetailTitleName>{post?.title}</BoardDetailTitleName>
        <BoardDetailNameAt>
          <BoardDetailNickName>{post?.username}</BoardDetailNickName>
          <BoardDetailCreateAt>{post?.createdDate}</BoardDetailCreateAt>
        </BoardDetailNameAt>
      </BoardDetailTitleContainer>
      <BoardDetailPostingContainer>
        <BoardDetailImage>
          <img src={post?.img} alt="wine" height="500px" />
        </BoardDetailImage>
        <BoardDetailDesc>{post?.body}</BoardDetailDesc>
        <BoardDetailWrite />
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
  position: relative;
`;

const BoardDetailTitleName = styled.h1`
  /* position: relative; */
  font-weight: bold;
  text-align: left;
  margin-top: 4rem;
`;

const BoardDetailNameAt = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const BoardDetailNickName = styled.p`
  position: absolute;
  font-weight: bold;
`;

const BoardDetailCreateAt = styled.p`
  position: absolute;
  font-weight: lighter;
  margin-left: 100px;
`;

const BoardDetailPostingContainer = styled.div`
  width: 100%;
`;

const BoardDetailImage = styled.div`
  margin: 0 auto;
  width: 50%;
  img {
    display: inline-block;
  }
`;

const BoardDetailDesc = styled.p`
  font-weight: lighter;
  font-size: 1.1rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export default BoardDetailPage;
