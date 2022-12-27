import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import BoardItem from "../components/board/BoardItem";

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
        {result.length === 0
          ? "결과가 없어요 :("
          : `${result.length}개의 게시물을 찾았어요 🔍`}
      </Typography>
      <ResultSection>
        {result.map((item) => (
          <BoardItem key={item.id} item={item} />
        ))}
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
