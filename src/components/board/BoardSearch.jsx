import styled from "styled-components";
import { Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardSerach = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchForm = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8080/board?q=${searchValue}`)
      .then((response) => {
        navigate("/search", {
          state: { data: response.data },
        });
      });
  };

  return (
    <StyeldWrapper>
      <form onSubmit={handleSearchForm}>
        <Input onChange={handleSearchValue} fullWidth placeholder="🔍 검색" />
      </form>
    </StyeldWrapper>
  );
};

export default BoardSerach;

const StyeldWrapper = styled.div`
  width: 18rem;
  padding: 5px;
  margin: auto;
`;
