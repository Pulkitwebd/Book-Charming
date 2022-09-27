import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import classes from "./AuthorInterview.module.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Shared from "./Shared";

const AuthorInterview = () => {
  return (
    <Box className={classes.authorInterviewsPage}>
      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Author Interviews
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>
      <Box className={classes.heading}>
        <Typography className={`interFont`}>
          New interviews every wednesday and sunday
        </Typography>
      </Box>
      <Box className={classes.postioningBar}>
        <Box className={classes.searchBarBox}>
          <input
            type="text"
            placeholder="Search Author Interviews"
            className={classes.searchBar}
          />
          <SearchTwoToneIcon style={{ cursor: "pointer" }} />
        </Box>
      </Box>
      <Box className={`${classes.sortbyBox} interFont`}>
        <Typography>Sort by:</Typography>
        <FormControl
          sx={{ m: 1, minWidth: 40 }}
          variant="standard"
          className={classes.FormControl}
        >
          <Select defaultValue={1} className={classes.select}>
            <MenuItem value={1}>lastest</MenuItem>
            <MenuItem value={2}>Thirty</MenuItem>
            <MenuItem value={3}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.shared}>
        <Shared />
      </Box>
      <Box className={classes.loadmore}>
        <Typography className={`playfairFont`}>Load more</Typography>
      </Box>
    </Box>
  );
};

export default AuthorInterview;
