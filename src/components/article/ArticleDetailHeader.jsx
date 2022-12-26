import styled from "styled-components";

const ArticleDetailHeader = ({ articleDatas, articleComment }) => {
  const stars = articleComment.filter(
    (cmt) => cmt.alcoholId === articleDatas.id
  );
  const starCal = stars
    .map((s) => Number(s.star))
    ?.reduce((pre, cur) => pre + cur, 0);

  const string =
    "부드럽고 맛있으며 적당한 쌀의 달콤함과 그라파의 느낌도 살짝 나타나는 신기한 소주입니다.";
  return (
    <ArticleDetailWrap>
      <ArticleDetailContainer>
        <ArticleDetailMainBox>
          <ArticleDetailLeftBox>
            <ArticleDetailImage
              src={`${process.env.PUBLIC_URL}/articleImg/soju.png`}
              alt="토끼 소주 블랙"
            />
          </ArticleDetailLeftBox>
          <ArticleDetailRightBox>
            <ArticleDetailName>토끼 소주 블랙</ArticleDetailName>
            <ArticleDetailRank>
              ⭐️ {(starCal / stars.length).toFixed(1)}
            </ArticleDetailRank>
            <ArticleDetailDesc>{string}</ArticleDetailDesc>
          </ArticleDetailRightBox>
        </ArticleDetailMainBox>
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
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  border-bottom: solid #d3d3d3 2px;
`;

const ArticleDetailMainBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const ArticleDetailLeftBox = styled.div`
  width: 50%;
  text-align: center;
`;

const ArticleDetailImage = styled.img`
  width: 30%;
`;

const ArticleDetailRightBox = styled.div`
  width: 50%;
`;

const ArticleDetailName = styled.h1`
  font-weight: bold;
  text-align: left;
`;

const ArticleDetailRank = styled.p`
  font-weight: bold;
`;

const ArticleDetailDesc = styled.p`
  font-weight: lighter;
  display: inline-block;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;
export default ArticleDetailHeader;
