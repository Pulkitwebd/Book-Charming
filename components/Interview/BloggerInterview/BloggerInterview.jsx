import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import classes from "./BloggerInterview.module.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Shared from "./Shared";
import Link from "next/link";

const BloggerInterview = () => {
  return (
    <Box className={classes.authorInterviewsPage}>
      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Blogger Interviews
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>
      <Box className={classes.postioningBar}>
        <Box className={classes.searchBarBox}>
          <input
            type="text"
            placeholder="Search Blogger Interviews"
            className={classes.searchBar}
          />
          <SearchTwoToneIcon style={{ cursor: "pointer" }} />
        </Box>
      </Box>
      <Box className={classes.interformBox}>
        <Typography className={`${classes.fillFormHeading} interFont`}>
          Fill this form to be interveiwed!
        </Typography>
        <Typography className={`${classes.googleform} interFont`}>
          Google form <i className="fa-solid fa-arrow-up-right"></i>
        </Typography>
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
      <Link href="/interviews/fullpage">
        <Box className={classes.shared}>
          <Shared />
        </Box>
      </Link>
      <Box className={classes.loadmore}>
        <Typography className={`playfairFont`}>Load more</Typography>
      </Box>
    </Box>
  );
};

export default BloggerInterview;
