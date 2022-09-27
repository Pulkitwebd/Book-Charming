import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import classes from "./Guestpost.module.css";
import Image from "next/image";
import book from "../../public/images/guestpostbook.png";

const Guestpost = () => {
  return (
    <Box className={classes.guespost_page}>
      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Guest Post
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>
      <Box className={classes.heading}>
        <Typography className={`interFont`}>
          Love writing articles and reviewing books?
        </Typography>
      </Box>
      <Box className={classes.thankupara}>
        <Typography className={`playfairFont`}>
          Hello👋 <br />
          Thanks for Stopping by! <br />
          we are open to receiving the guest post. If you are interested, you
          can submit your articles, but please make sure that it is related to
          our niche.
        </Typography>
      </Box>
      <Box className={classes.guideline_box}>
        <Box>
          <Typography className={classes.guideline}>Guidelines</Typography>
          <Box>
            <ul>
              <li>
                Your post must be original and 100% plagiarism-free.
                <li> the minimum word count up to 1000 words</li>
                <li> include picture relevent to article</li>
                <li>all articles are strictly in English language</li>
                <li>You are required to promote the post on social media</li>
                <li>ensure quality and well-edited</li>
                <li> provide two social links</li>
                <li> provide a catchy heading </li>
                <li>post must be relevant to site’s niche</li>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Image src={book}></Image>
        </Box>
      </Box>
      <Box className={`${classes.emailYourEntries} `}>
        <Typography className={` ${classes.emailYourEntriesPara} interFont`}>
          Email your entries to
          <span
            style={{ color: "rgba(54, 135, 255, 1)"}}
          >{` bookscharming@gmail.com `}</span>
          in <b>word</b> format, Please write <b> “ Guest post” </b>in the
          subject
        </Typography>
      </Box>
    </Box>
  );
};

export default Guestpost;
