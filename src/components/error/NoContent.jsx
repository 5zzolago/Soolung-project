import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-regular-svg-icons";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const NoContent = () => {
  return (
    <Box
      sx={{
        my: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <EmojiWrap>
        <FontAwesomeIcon icon={faFaceDizzy} />
      </EmojiWrap>
      <Typography variant="body1" sx={{ color: "#999" }}>
        등록된 콘텐츠가 없어요!
      </Typography>
    </Box>
  );
};

export default NoContent;

const EmojiWrap = styled.div`
  font-size: 7rem;
  color: #ccc;
`;
