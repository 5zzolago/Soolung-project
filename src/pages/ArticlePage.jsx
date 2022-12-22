import React from "react";
import GridView from "../components/GirdView";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 30px 20px 30px 20px;
  margin: 10px;
  border-radius: 20px;
`;

const ArticlePage = () => {
  return (
    <StyledDiv>
      <GridView />
    </StyledDiv>
  );
};

export default ArticlePage;
