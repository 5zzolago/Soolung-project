import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const BoardItem = ({ item }) => {
  return (
    <Link to={"/board/1"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: 1,
          borderColor: "#ccc",
          py: 2,
          px: 1,
          mb: 2,
        }}
      >
        <TextWrap>
          <Title>{item.title}</Title>
          <TextBody>{item.body}</TextBody>
          <InfoTextWrap>
            <Typography variant="body2" sx={{ mr: 4, color: "#999" }}>
              댓글 0개
            </Typography>
            <Typography variant="body2" sx={{ mr: 4, color: "#999" }}>
              by {item.username}
            </Typography>
            <Typography variant="body2" sx={{ color: "#999" }}>
              {new Date(item.createdDate).toLocaleString().slice(0, 12)}
            </Typography>
          </InfoTextWrap>
        </TextWrap>
        <ImgWrap>
          <img src={item.img} alt="" />
        </ImgWrap>
      </Box>
    </Link>
  );
};

export default BoardItem;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextWrap = styled.div`
  padding: 0 20px;
`;

const InfoTextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const ImgWrap = styled.div`
  padding-right: 2.4rem;
`;

const TextBody = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0.2rem 2.2rem 2.4rem 0;
  padding-right: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
