import React from "react";
import classes from "./InterviewIndex.module.css";
import { Box, Typography, Divider } from "@mui/material";
import Authorinterviews from "./AuthorInterviews";
import Bloggerinterviews from "./BloggerInterviews";

const InterviewIndex = () => {
  return (
    <Box className={classes.interviewPage}>
      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Interviews
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>
      <Box style={{marginBottom : "30px", marginTop : "20px"}}>
        <Authorinterviews />
      </Box>
      <Box style={{marginBottom : "70px"}}>
        <Bloggerinterviews />
      </Box>
    </Box>
  );
};

export default InterviewIndex;
