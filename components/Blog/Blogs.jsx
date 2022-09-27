import React from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Box, Typography, Grid, Divider } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import classes from "./Blogs.module.css";
import Shared from "./Shared";

const Blogs = () => {
  return (
    <Box className={classes.blogPage}>
      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Blogs
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>
      <Box className={classes.postioningSearch_Bar}>
        <Box className={classes.searchBarBox}>
          <input
            type="text"
            placeholder="Search Blogger Interviews"
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
      <Box className={classes.listBox}>
        <Shared />
      </Box>
      <Box className={classes.loadmore}>
        <Typography className={`playfairFont`}>Load more</Typography>
      </Box>
    </Box>
  );
};

export default Blogs;
