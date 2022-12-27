import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = (props) => {
  const { btnType, text, size, type, outline, handler, height } = props;
  const navigate = useNavigate();

  const handleMovingToBoard = () => {
    navigate("/board");
  };

  const handleMovingToArticle = () => {
    navigate("/article");
  };

  const handleMovingToEditor = () => {
    navigate("/editor");
  };

  const handleSetIsEditClick = () => {
    // 아티클 댓글 수정 취소
    handler(false);
  };
  const handleSetIsUpdateClick = () => {
    // 아티클 댓글 수정 취소
    handler(false);
  };

  const handleClicked = (btnType) => {
    switch (btnType) {
      // 메인페이지 보드 더보기 버튼
      case "movingToBoard":
        return handleMovingToBoard();

      // 글쓰기 버튼
      case "movingToEditor":
        return handleMovingToEditor();

      // 메인페이지 아티클 더보기 버튼
      case "movingToArticle":
        return handleMovingToArticle();

      // 아티클 댓글 수정 취소하기 버튼
      case "cancleEditingArticleComment":
        return handleSetIsEditClick();

      // 아티클 댓글 수정 비밀번호 확인 버튼
      case "checkArticleCommentPassword":
        return handler();

      // 아티클 댓글 삭제 취소하기 버튼
      case "cancelDeleteArticleComment":
        return handleSetIsUpdateClick();

      // 아티클 댓글 삭제 비밀번호 확인 버튼
      case "checkArticleDelCommentPassword":
        return handler();

      // 아티클 댓글 수정 비밀번호 입력 취소 버튼
      case "closeEditingArticleCommentModal":
        return handler();

      default:
        break;
    }
  };

  return (
    <ButtonBox
      type={type ? type : "button"}
      btnType={btnType}
      size={size}
      height={height}
      outline={outline ? outline : ""}
      onClick={() => handleClicked(btnType)}
    >
      {text}
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button`
  width: ${(props) => {
    switch (props.size) {
      case "primary":
        return "200px";
      case "secondary":
        return "140px";
      case "tertiary":
        return "15%";
      case "quaternary":
        return "70px";
      default:
        return "100px";
    }
  }};
  height: ${(props) => {
    switch (props.height) {
      case "primary":
        return "46px";
      case "secondary":
        return "40px";
      case "tertiary":
        return "3.4rem";
      default:
        return "";
    }
  }};
  background-color: ${(props) => (props.outline ? "transparent" : "#333")};
  border: ${(props) => (props.outline ? "1px solid #333" : "none")};
  color: ${(props) => (props.outline ? "#333" : "#fff")};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => (props.outline ? "transparent" : "#101010")};
    border: ${(props) => (props.outline ? "1px solid #101010" : "none")};
    color: ${(props) => (props.outline ? "#333" : "#fff")};
  }

  &:disabled {
    border: none;
    background-color: #aaa;
    cursor: not-allowed;
  }
`;
