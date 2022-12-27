import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridView from "./ArticleItem";
import Button from "../button/Button";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledH4 = styled.div`
  font-size: 30px;
  font-weight: bolder;
  margin: 80px 0 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.page === "article" ? "center" : "flex-end"};
  align-items: center;
  margin: 2rem 0 7rem;
  padding-right: ${(props) => (props.page === "article" ? "3rem" : "")};
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 15, margin: 0, padding: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ article }) {
  const location = useLocation();
  const currentLocation = location.pathname.slice(1);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrap>
      <Box sx={{ width: "100%" }}>
        {/* <StyledH4>Article</StyledH4> */}
        <Typography
          variant="h1"
          sx={{
            fontSize: 36,
            fontWeight: 700,
            my: 2,
            paddingLeft: 1,
            marginTop: 10,
          }}
        >
          <Link to={"/article"}>Article</Link>
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "black" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={{ color: "black" }} label="ALL" {...a11yProps(0)} />
            <Tab sx={{ color: "black" }} label="SOJU" {...a11yProps(1)} />
            <Tab sx={{ color: "black" }} label="BEER" {...a11yProps(2)} />
            <Tab sx={{ color: "black" }} label="WINE" {...a11yProps(3)} />
            <Tab sx={{ color: "black" }} label="WHISKY" {...a11yProps(4)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <GridView article={article} categories="all" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GridView article={article} categories="soju" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <GridView article={article} categories="beer" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <GridView article={article} categories="wine" />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <GridView article={article} categories="whisky" />
        </TabPanel>

        <ButtonWrap page={"article"}>
          {currentLocation === "" ? (
            <Button
              size={"primary"}
              height={"primary"}
              btnType={"movingToArticle"}
              text={"더보기"}
            />
          ) : null}
        </ButtonWrap>
      </Box>
    </Wrap>
  );
}
