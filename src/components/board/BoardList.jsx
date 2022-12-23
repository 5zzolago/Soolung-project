import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BoardItem from "./BoardItem";
import Button from "../button/Button";
import { Typography } from "@mui/material";
import styled from "styled-components";

const BoardList = () => {
  const location = useLocation();
  const currentLocation = location.pathname.slice(1);

  return (
    <Section>
      <Typography
        variant="h1"
        sx={{ fontSize: 36, fontWeight: 700, my: 2, paddingLeft: 1 }}
      >
        <Link to={"/board"}>Board</Link>
      </Typography>
      <div>
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
      </div>
      <ButtonWrap page={currentLocation === "" ? "main" : "board"}>
        <Button
          size={currentLocation === "" ? "primary" : "secondary"}
          type={currentLocation === "" ? "more" : "editor"}
          text={currentLocation === "" ? "더보기" : "글쓰기"}
        />
      </ButtonWrap>
    </Section>
  );
};

export default BoardList;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.page === "main" ? "center" : "flex-end"};
  align-items: center;
  margin: 2rem 0 7rem;
  padding-right: ${(props) => (props.page === "board" ? "3rem" : "")};
`;

const Section = styled.section`
  margin: 3rem 0 4rem;
`;
