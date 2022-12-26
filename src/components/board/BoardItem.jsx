import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const BoardItem = ({ item }) => {
  return (
    <Link to={`/board/${item.id}`}>
      <ItemBox
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: 1,
          borderColor: "#eee",
          py: 3,
          px: 1,
          mb: 1,
        }}
      >
        <TextWrap>
          <Title>{item.title}</Title>
          <TextBody>{item.body}</TextBody>
          <InfoTextWrap>
            <Typography variant="body2" sx={{ mr: 6, color: "#999" }}>
              댓글 {item.comments}개
            </Typography>
            <Typography variant="body2" sx={{ mr: 2, color: "#999" }}>
              <Nickname>by {item.username}</Nickname>
            </Typography>
            <Typography variant="body2" sx={{ color: "#999" }}>
              {new Date(item.createdDate).toLocaleString().slice(0, 12)}
            </Typography>
          </InfoTextWrap>
        </TextWrap>
        <ImgWrap>
          <img src={item.img} alt="썸네일" />
        </ImgWrap>
      </ItemBox>
    </Link>
  );
};

export default BoardItem;

const ItemBox = styled(Box)`
  &:hover {
    h1 {
      font-weight: 700;
    }

    img {
      transform: scale(1.1);
    }
  }
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextWrap = styled.div`
  width: 80%;
  padding: 0 20px;
`;

const InfoTextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const ImgWrap = styled.div`
  margin-right: 2.4rem;
  width: 180px;
  height: 180px;
  min-width: 180px;
  min-height: 180px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 300ms ease-in-out;
  }
`;

const TextBody = styled.p`
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

const Nickname = styled.span`
  display: inline-block;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
