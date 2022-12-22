import React from "react";
import { Link } from "react-router-dom";
import { Container, Box } from "@mui/system";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <HeaderWrap>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link to={"/"}>
            <Logo>
              <img src={logo} alt="로고" height="32px" />
            </Logo>
          </Link>
        </Box>
        <Box>
          <Nav>
            <ul>
              <li>
                <Link to={"/article"}>Article</Link>
              </li>
              <li>
                <Link to={"/board"}>Board</Link>
              </li>
            </ul>
          </Nav>
        </Box>
      </Container>
    </HeaderWrap>
  );
};

export default Header;

// 헤더 스타일 컴포넌트
const HeaderWrap = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  padding-top: 8px;
`;

const Nav = styled.nav`
  ul {
    display: flex;

    li {
      width: 48px;
      &:first-child {
        margin-right: 40px;
      }

      &:hover {
        font-weight: 700;
      }
    }
  }
`;
