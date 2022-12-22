import React from "react";
import styled from "styled-components";
import { Container, Box } from "@mui/material";
import logo from "../assets/logo-footer.png";
import { Logo } from "../pages/Header";

const Footer = () => {
  return (
    <FooterWrap>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Logo>
            <img src={logo} alt="로고" height="28px" />
          </Logo>
        </Box>
        <Box>
          <CopyRight>Copyright 2022. Soolung All rights reserved.</CopyRight>
        </Box>
      </Container>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  width: 100%;
  background-color: #f2f2f2;
`;

const CopyRight = styled.p`
  font-size: 12px;
  color: #555;
`;
