import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = ({ type, text, size, handler }) => {
  const navigate = useNavigate();

  const handleGoToBoard = () => {
    navigate("/board");
  };

  const handleGoToArticle = () => {
    navigate("/article");
  };

  const handleGoToEditor = () => {
    navigate("/editor"); 
  };

  const handleClicked = (type) => {
    switch (type) {
      case "more":
        return handleGoToBoard();

      case "editor":
        return handleGoToEditor();

      case "article":
        return handleGoToArticle();

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
