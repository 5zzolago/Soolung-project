import styled from "styled-components";

const ArticleDetailHeader = ({ articleDatas }) => {
  const { name, desc, star, img } = articleDatas;

  return (
    <ArticleDetailWrap>
      <ArticleDetailContainer>
        <ArticleDetailMainBox>
          <ArticleDetailLeftBox>
            <ArticleDetailImage src={img} alt={name} />
          </ArticleDetailLeftBox>
          <ArticleDetailRightBox>
            <ArticleDetailName>{name}</ArticleDetailName>
            <ArticleDetailRank>⭐️{Number(star).toFixed(1)}</ArticleDetailRank>
            <ArticleDetailDesc>{desc}</ArticleDetailDesc>
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
  margin-top: 1rem;
`;
export default ArticleDetailHeader;
