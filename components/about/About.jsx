import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./About.module.css";
import Author from "../../public/images/author.png";
import certificate1 from "../../public/images/certificate1.jpg";
import certificate2 from "../../public/images/certificate2.jpg";
import certificate3 from "../../public/images/certificate3.jpg";
import certificate4 from "../../public/images/certificate4.png";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { ListBoxHeader } from "../shared/ListBox/ListBox";
import Testimonal from "../HomePage/Testimonial/Testimonal";

const About = () => {
  return (
    <>
      <Box className={classes.aboutPage}>
        <Box className={classes.pageNameBox}>
          <Typography className={` ${classes.pageName} playfairFont`}>
            About
          </Typography>
          <Divider className={classes.divider} variant="middle"></Divider>
        </Box>
        <Box className={classes.authorBox}>
          <Box className={classes.imgBox}>
            <Image src={Author}></Image>
          </Box>
          <Box className={`${classes.description} playfairFont`}>
            <Typography>
              Born and raised in Indore, India,<b> Aakanksha Jain</b> lives in
              <b> Pune. </b>
              She is a commerce graduate and an MBA dropout. She worked as a
              teacher for three years but left her job and started blogging in
              2017.
            </Typography>
            <Typography>
              She loves reading books but never thought of writing reviews.
              Then, one day someone told her about
              <Link href="/">
                <a> GoodReads, </a>
              </Link>
              and voila, her journey begins as a book blogger and reviewer. She
              turns her hobby and passion into full-time work.
            </Typography>
            <Typography>
              {` She's honored to work with more than 400 authors and enjoys
              reading books of different genres. She believes the fastest way to
              discover something life-changing is by reading books. She's
              associated with different book clubs, associations and partnered
              with various publishing houses worldwide. She also writes articles
              for`}
              <Link href="/">
                <a> Daily hunt </a>
              </Link>
              app and has a reach of 1.8 Million followers there.
            </Typography>
            <Typography>
              {` Aakanksha is and too. She believes in learning to do different
              things, which leads her to write a non-fiction book, She is
              currently working on her second book. She's an avid reader and an
              Aquarius soul. She always speaks the truth, and this habit shows
              in her reviews. Besides reading and writing, she loves to eat food
              (not a fan of cooking). She's very much disciplined and enjoys
              working on very short deadlines.`}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.acheivementBox}>
          <ListBoxHeader
            headerName={"Acheivements"}
            path={"/achievement"}
          />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            style={{marginTop : "0px"}}
          >
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className={classes.innerAchivementBox}>
                <Box className={classes.imageWrapper}>
                  <Image src={certificate1}></Image>
                </Box>
                <Typography className={`${classes.achievementName} playfairFont`}>
                  Best Book Blogger of the Year 2020
                </Typography>
                <Typography className={`${classes.givenBy} interFont `}>
                  The literalry Mirror
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className={classes.innerAchivementBox}>
                <Box className={classes.imageWrapper}>
                  <Image src={certificate2}></Image>
                </Box>
                <Typography className={`${classes.achievementName} playfairFont`}>
                  Best Book Blogger of the Year 2020
                </Typography>
                <Typography className={`${classes.givenBy} interFont `}>
                  The literalry Mirror
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className={classes.innerAchivementBox}>
                <Box className={classes.imageWrapper}>
                  <Image src={certificate3}></Image>
                </Box>
                <Typography className={`${classes.achievementName} playfairFont`}>
                  Best Book Blogger of the Year 2020
                </Typography>
                <Typography className={`${classes.givenBy} interFont `}>
                  The literalry Mirror
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className={classes.innerAchivementBox}>
                <Box className={classes.imageWrapper}>
                  <Image src={certificate4}></Image>
                </Box>
                <Typography className={`${classes.achievementName} playfairFont`}>
                  Best Book Blogger of the Year 2020
                </Typography>
                <Typography className={`${classes.givenBy} interFont `}>
                  The literalry Mirror
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={classes.testimonalBox}>
        <Testimonal />
      </Box>
    </>
  );
};

export default About;
