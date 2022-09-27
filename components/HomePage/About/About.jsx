import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Author from "../../../public/images/author.png"
import Image from "next/image";
import classes from "./About.module.css";

const About = ( ) => {

  return (
    <Box className={classes.AboutMeBox}>
      <Box className={classes.imgBox}>
        <Image src={Author} ></Image>
      </Box>
      <Box className={classes.descriptionBox}>
        <Typography className={`${classes.aboutMe} interFont`}>About Me</Typography>
        <Typography className={`${classes.description} playfairFont`}>
         {`Born and raised in Indore, India,Aakanksha Jain lives in Pune . She
          is a commerce graduate and an MBA dropout. She worked as a teacher
          for three years but left her job and started blogging in 2017. She
          loves reading books but never thought of writing reviews. Then, one
          day someone told her about , and voila, her journey begins as a book
          blogger and reviewer. She turns her hobby and passion into full-time
          work.She's honored to work with more than 400 authors and enjoys
          reading books of different genres. She believes the fastest way to
          discover something life-changing is by reading books.`}
        </Typography>
        <Button className={`${classes.readmoreBtn} interFont`}>Read More</Button>
      </Box>
    </Box>
  );
};

export default About;
