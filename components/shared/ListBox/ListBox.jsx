import React from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import classes from "./ListBox.module.css";
import Link from "next/link";

const ListBoxHeader = ({ headerName, path }) => {
  return (
    <>
      <Box className={classes.header}>
        <Typography className={`${classes.headerName} playfairFont`}>
          {headerName}
        </Typography>
        <Link href={path}>
          <button className={`${classes.moreBtn} playfairFont`}>
            More
            <i className="fa-solid fa-arrow-up-right"></i>
          </button>
        </Link>
      </Box>
    </>
  );
};

const ListBox = ({
  id,
  textHeading,
  bookCategory,
  img,
  date,
  author,
  views,
  content,
  slug,
  path,
}) => {
  var imgWidthCondition = () => {
    if (path === "book-cover") {
      return true;
    } else if (path === "book-tour") {
      return true;
    } else if (path === "book-blitz") {
      return true;
    } else if (path === "book-reviews") {
      return true;
    } else {
      return false;
    }
  };

  var imgCondition = imgWidthCondition();
  return (
    <>
      <Grid item xs={12} md={6} lg={6} key={id}>
        <Link href={`/${path}/${slug}`}>
          <Box>
            <Box className={classes.mainBox}>
              <Box
                className={classes.imgBox}
                style={{ width: bookCategory || imgCondition ? "30%" : "40%" }}
              >
                <Image src={img} layout="responsive" height={330} />
              </Box>
              <Box
                className={classes.textBox}
                style={{ width: bookCategory || imgCondition ? "70%" : "60%" }}
              >
                <Box>
                  {bookCategory ? (
                    <Box className={classes.bookCategory}>{bookCategory}</Box>
                  ) : (
                    ""
                  )}
                  <Typography className={`${classes.heading} playfairFont`}>
                    {textHeading}
                  </Typography>
                </Box>
                <Box className={`${classes.dateAuthorViewBox} interFont`}>
                  <Typography>{date}</Typography>
                  <Typography>{author}</Typography>
                  <Typography className={classes.eyeView_Box}>
                    <RemoveRedEyeOutlinedIcon className={classes.eyeIcon} />
                    {views}
                  </Typography>
                </Box>
                <Box className={classes.contentBox}>
                  <Typography className={`${classes.content} playfairFont`}>
                    {content}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Link>
      </Grid>
    </>
  );
};

export { ListBoxHeader, ListBox };
