import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Typography, Pagination } from "@mui/material";
import Button from "../button/Button";
import BoardItem from "./BoardItem";
import NoContent from "../error/NoContent";
import { getBoard, getAllBoard } from "../../store/modules/boardSlice";

const BoardList = () => {
  const board = useSelector((state) => state.boardSlice.list);
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  // 마지막 페이지 계산
  const LAST_PAGE =
    board.length % 5 === 0
      ? parseInt(board.length / 5)
      : parseInt(board.length / 5) + 1;
  const currentLocation = location.pathname.slice(1);

  useEffect(() => {
    // currentLocation === "" 인 경우 (falsy한 값) getAllBoard() 실행
    !currentLocation ? dispatch(getBoard()) : dispatch(getAllBoard());
  }, [currentLocation, dispatch]);

  // 페이지 이동 핸들러
  const handlePageChange = (event) => {
    const currentPageIndex = Number(event.target.outerText);
    setCurrentPage(currentPageIndex);
  };

  // 게시글 리스트 렌더링 핸들러
  const handleBoardList = () => {
    if (board.length === 0) {
      return <NoContent />;
    }
    // currentLocation === "" 인 경우 최신순 5개 일괄 출력 / 아닐 경우 페이지네이션 적용
    if (!currentLocation) {
      return board.map((item) => <BoardItem key={item.id} item={item} />);
    } else {
      return board
        .slice(5 * (currentPage - 1), 5 * (currentPage - 1) + 5)
        .map((item) => <BoardItem key={item.id} item={item} />);
    }
  };

  return (
    <Section>
      <Typography
        variant="h1"
        sx={{ fontSize: 36, fontWeight: 700, my: 2, paddingLeft: 1 }}
      >
        <Link to={"/board"}>Board</Link>
      </Typography>
      <div>{handleBoardList()}</div>
      {board.length !== 0 && (
        <ButtonWrap page={!currentLocation ? "main" : "board"}>
          <Button
            size={!currentLocation ? "primary" : "secondary"}
            type={!currentLocation ? "more" : "editor"}
            text={!currentLocation ? "더보기" : "글쓰기"}
          />
        </ButtonWrap>
      )}
      {board.length !== 0 && (
        <PaginationWrap>
          {currentLocation && (
            <Pagination
              page={currentPage}
              count={LAST_PAGE}
              defaultPage={1}
              onChange={handlePageChange}
            />
          )}
        </PaginationWrap>
      )}
    </Section>
  );
};

export default BoardList;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.page === "main" ? "center" : "flex-end"};
  align-items: center;
  margin: 1rem 0;
  padding-right: ${(props) => (props.page === "board" ? "3rem" : "")};
`;

const Section = styled.section`
  margin: 3rem 0 4rem;
`;

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.6rem 0 5rem;
`;
