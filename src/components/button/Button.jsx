import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = ({ type, text, size, handler }) => {
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

  const handleClicked = (type) => {
    switch (type) {
      case "more":
        return handleMovingToBoard();

      case "editor":
        return handleMovingToEditor();

      case "article":
        return handleMovingToArticle();

      default:
        break;
    }
  };

  return (
    <ButtonBox type={type} size={size} onClick={() => handleClicked(type)}>
      {text}
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button`
  width: ${(props) => (props.size === "primary" ? "200px" : "140px")};
  height: 46px;
  background-color: #333;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;

  &:hover {
    background-color: #101010;
  }

  &:disabled {
    border: none;
    background-color: #aaa;
    cursor: not-allowed;
  }
`;
