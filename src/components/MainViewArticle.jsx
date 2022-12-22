import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
      <br />
      <br />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ALL" {...a11yProps(0)} />
          <Tab label="SOJU" {...a11yProps(1)} />
          <Tab label="BEER" {...a11yProps(2)} />
          <Tab label="WINE" {...a11yProps(3)} />
          <Tab label="WHISKY" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        모두 보기
      </TabPanel>
      <TabPanel value={value} index={0}>
        모두 보기
      </TabPanel>
      <TabPanel value={value} index={1}>
        소주 보기
      </TabPanel>
      <TabPanel value={value} index={2}>
        맥주 보기
      </TabPanel>
      <TabPanel value={value} index={3}>
        와인 보기
      </TabPanel>
      <TabPanel value={value} index={4}>
        위스키 보기
      </TabPanel>
    </Box>
  );
}
