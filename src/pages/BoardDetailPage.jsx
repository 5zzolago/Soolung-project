import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { now } from "../utils/date";
import { __deleteBoard } from "../store/modules/boardSlice";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "../components/button/Button";
import BoardDetailCommentWrite from "../components/board/BoardDetailCommentWrite";
import styled from "styled-components";

const BoardDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postData, setPostData] = useState([]);
  const [isOpneModal, setIsOpenModal] = useState(false);
  const [isPwValue, setIsPwValue] = useState("");
  const id = useParams().boardId;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/board?id=${id}`)
      .then((response) => {
        setPostData(response.data);
      });
  }, []);

  const post = postData[0];

  const handlePasswordChange = (e) => setIsPwValue(e.target.value);
  const handleModalClose = () => setIsOpenModal(false);
  const handleModalOpen = () => {
    setIsOpenModal(true);
    setIsPwValue("");
  };

  const handleEditPageMove = () => {
    navigate("/board/editorPage", { state: post });
  };

  const handleBoardDelete = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.");
      dispatch(__deleteBoard(id));
      navigate("/board");
    } else {
      alert("취소 되었습니다.");
      return;
    }
  };

  return (
    <BoardDetailWrap>
      <BoardDetailHeader>
        <BoardDetailTitleContainer>
          <BoardDetailTitleName>{post?.title}</BoardDetailTitleName>
          <BoardDetailNameAt>
            <BoardDetailNickName>by. {post?.username}</BoardDetailNickName>
            <BoardDetailCreateAt>{now(post?.createdDate)}</BoardDetailCreateAt>
          </BoardDetailNameAt>
        </BoardDetailTitleContainer>
        <BoardEdtingBtnContainer>
          <BoardIconWrapper>
            <BoardEditButton onClick={handleEditPageMove}>
              <FontAwesomeIcon icon={faPenToSquare} color={"#aaa"} />
            </BoardEditButton>
            <BoardDeleteButton onClick={handleModalOpen}>
              <FontAwesomeIcon icon={faXmark} color={"#aaa"} />
            </BoardDeleteButton>
          </BoardIconWrapper>
        </BoardEdtingBtnContainer>
      </BoardDetailHeader>
      <BoardDetailPostingContainer>
        <BoardDetailImage>
          <img src={post?.img} alt="이미지" />
        </BoardDetailImage>
        <BoardDetailDesc>{post?.body}</BoardDetailDesc>

        <BoardDetailCommentWrite boardId={id} postData={postData} />

      </BoardDetailPostingContainer>
      <Modal
        open={isOpneModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BoardDetailModalBox>
            <BoardDeatilModalTextBox>
              <BoardDetailModalText>
                삭제하시려면 비밀번호를 입력해주세요.
              </BoardDetailModalText>
            </BoardDeatilModalTextBox>
            <BoardDeatilModalBtnBox>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                value={isPwValue}
                onChange={handlePasswordChange}
                autoComplete="current-password"
              />
              <Button
                btnType={"closeEditingArticleCommentModal"}
                size={"quaternary"}
                outline={true}
                handler={handleModalClose}
                height={"secondary"}
                text={"취소"}
              />
              <Button
                btnType={"checkArticleCommentPassword"}
                size={"quaternary"}
                height={"secondary"}
                handler={handleBoardDelete}
                text={"확인"}
              />
            </BoardDeatilModalBtnBox>
          </BoardDetailModalBox>
        </Box>
      </Modal>
    </BoardDetailWrap>
  );
};

const BoardDetailWrap = styled.div`
  width: 100%;
`;
const BoardDetailTitleContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const BoardDetailTitleName = styled.h1`
  font-weight: bold;
  text-align: left;
  margin-top: 4rem;

  color: #101010;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoardDetailNameAt = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  color: #555;
`;

const BoardDetailNickName = styled.p`
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoardDetailCreateAt = styled.p`
  margin-left: 3rem;
`;

const BoardDetailPostingContainer = styled.div`
  width: 100%;
`;

const BoardDetailImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0 1rem;

  img {
    display: block;
  }
`;

const BoardDetailDesc = styled.p`
  color: #555;
  font-size: 1.1rem;
  margin: 4rem 0 8rem;
  padding: 0 5rem;
`;

const BoardDetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin-top: 5rem;
`;

const BoardEdtingBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoardEditButton = styled.button`
  font-size: 1.5rem;
  background-color: transparent;
  border: 0;
`;
const BoardDeleteButton = styled.button`
  font-size: 1.9rem;
  background-color: transparent;
  border: 0;
`;

const BoardIconWrapper = styled.div`
  width: 100%;
  font-size: 28px;
  display: flex;
  gap: 1.5rem;
  &:first-child {
    margin-right: 1.6rem;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "13%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "2rem",
  boxShadow: 24,
  p: 4,
};

const BoardDetailModalBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
`;

const BoardDeatilModalTextBox = styled.div`
  width: 100%;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
`;

const BoardDetailModalText = styled.p`
  font-weight: 100%;
  text-align: center;
`;

const BoardDeatilModalBtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export default BoardDetailPage;
