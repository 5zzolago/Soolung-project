import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SearchResultPage = () => {
  const location = useLocation();
  const result = location.state?.data;

  return (
    <Section>
      <Typography
        variant="h1"
        sx={{
          fontSize: 25,
          fontWeight: 700,
          my: 2,
          paddingLeft: 1,
          marginTop: 5,
        }}
      >
        {`${result.length}개의 게시물을 찾았어요 🔍`}
      </Typography>
      <ResultSection>
        {result.map((item) => {
          return (
            <BoardBox key={item.id}>
              <Link to={`/board/${item.id}`}>
                <BoxWrapper>
                  <BoxLeft>
                    <Title>{item.title}</Title>
                    <Body>{item.body}</Body>
                    <Meta>
                      <div>댓글 {item.comments}</div>
                      <div>by {item.username}</div>
                      <div>{item.createdDate}</div>
                    </Meta>
                  </BoxLeft>
                  <BoxRight>
                    <ImgWrap>
                      <img src={item.img} />
                    </ImgWrap>
                  </BoxRight>
                </BoxWrapper>
              </Link>
            </BoardBox>
          );
        })}
      </ResultSection>
    </Section>
  );
};

export default SearchResultPage;

const Section = styled.section`
  margin: 3rem 0 4rem;
`;

const ResultSection = styled.div`
  padding: 20px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1px 0;
  border-bottom: 1px solid #999;
`;

const BoardBox = styled.div`
  padding: 10px;
`;

const BoxLeft = styled.div``;
const BoxRight = styled.div``;

const ImgWrap = styled.div`
  margin-right: 2.4rem;
  width: 180px;
  height: 180px;
  min-width: 180px;
  min-height: 180px;
  overflow: hidden;

  img {
    display: block;
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  cursor: pointer;
`;
const Body = styled.p`
  font-size: 16px;
  color: #555;
  margin: 0.2rem 2.2rem 2.4rem 0;
  padding-right: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Meta = styled.div`
  display: flex;
  gap: 2rem;
  text-align: center;
  color: #999;
  font-size: 0.8rem;
`;

const Hr = styled.hr`
  color: black;
`;
