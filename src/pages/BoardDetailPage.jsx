import React from "react";
import styled from "styled-components";
import wine from "../assets/wine.jpg";
const BoardDetailPage = () => {
  return (
    <BoardDetailWrap>
      <BoardDetailTitleContainer>
        <BoardDetailTitleName>제목입니다</BoardDetailTitleName>
        <BoardDetailNameAt>
          <BoardDetailNickName>By.모히또</BoardDetailNickName>
          <BoardDetailCreateAt>2022-12-23</BoardDetailCreateAt>
        </BoardDetailNameAt>
      </BoardDetailTitleContainer>
      <BoardDetailPostingContainer>
        <BoardDetailImage>
          <img src={wine} alt="wine" height="500px" />
        </BoardDetailImage>
        <BoardDetailDesc>
          If you're the kind of person who stares at the endless shelves of wine
          before choosing a bottle because it has an attractive label, then you
          might need some help picking out wine. To make it a little easier for
          you, we've compiled a list of easy-drinking wines to help you identify
          and build your wine palate.
        </BoardDetailDesc>
      </BoardDetailPostingContainer>
    </BoardDetailWrap>
  );
};

const BoardDetailWrap = styled.div`
  width: 100%;
`;
const BoardDetailTitleContainer = styled.div`
  width: 100%;
`;

const BoardDetailTitleName = styled.h1`
  position: relative;
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
  width: 50%;
  margin-left: 12rem;
  margin-top: 6rem;
`;

const BoardDetailDesc = styled.p`
  font-weight: lighter;
  font-size: 1.5rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export default BoardDetailPage;
