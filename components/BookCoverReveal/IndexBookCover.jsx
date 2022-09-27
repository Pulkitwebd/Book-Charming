import React from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Box, Typography, Divider } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import classes from "./IndexBookCover.module.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Shared from "./Shared";

const IndexBookCover = () => {
  return (
    <Box className={classes.BookCover_page}>
      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Book Cover
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>
      <Box className={classes.postioningBar}>
        <Box className={classes.searchBarBox}>
          <input
            type="text"
            placeholder="Search Book Cover"
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

export default IndexBookCover;
