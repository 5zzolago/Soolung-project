import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import GridView from "./ArticleItem";
import Button from '../button/Button';

const StyledH4 = styled("div")(({ them }) => ({
  fontSize: "30px",
  fontWeight: "bolder",
  margin: "100px 0 10px 0",
}));

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#c3bdbd",
  width: "230px",
  height: "230px",
  textAlign: "center",
}));

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
        <Box sx={{ p: 15 }}>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <StyledH4>Article</StyledH4>
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
        <GridView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GridView />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GridView />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GridView />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GridView />
      </TabPanel>

      
    </Box>
  );
}

<Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    <Grid xs={8}>
      <Item>xs=8</Item>
    </Grid>
    <Grid xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid xs={8}>
      <Item>xs=8</Item>
    </Grid>
  </Grid>
</Box>;
