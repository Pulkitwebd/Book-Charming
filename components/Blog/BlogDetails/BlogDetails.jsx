import React, { useState, useContext } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import pageMainImg from "../../../public/images/sliderImg.png";
import { BlogsContext } from "../../../pages/blogs/[slug]";
import SocialIcons from "../../shared/SocialIcons";
import classes from "./BlogDetails.module.css";
import blogFullpage from "./Data";
import BlogsData from "../Data";
import Image from "next/image";
import CommentBox from "../../shared/CommentBox/CommentBox";

const Fullpage = () => {
  const [books, setBooks] = useState(blogFullpage);

  const [blogs, setBlogs] = useState(BlogsData);

  const blogSlug = useContext(BlogsContext);

  var gettingData = () => {
    var BookReviewArray = blogs.find((blog) => blog.slug === blogSlug);

    if (BookReviewArray == undefined) {
      return false;
    }

    return BookReviewArray;
  };

  var data = gettingData();

  return (
    <Box className={classes.blog_fullpage}>
      <Typography className={`${classes.pageHeading} playfairFont`}>
        {data.textHeading}
      </Typography>

      <Box className={classes.MainImgPara_box}>
        <Box className={classes.mainImg_box}>
          <Image src={pageMainImg}></Image>
        </Box>
        <Typography className={`${classes.pageMainPara} playfairFont`}>
          {data.content}
        </Typography>
      </Box>

      {books.map((book) => {
        return (
          <Box key={book.id} className={classes.book_box}>
            <Typography className={`${classes.bookHeading} playfairFont`}>
              {book.bookHeading}
            </Typography>
            <Box className={classes.bookImg_box}>
              <Image src={book.bookImg} />
            </Box>
            <Typography className={classes.bookDesc}>
              {book.bookDescription}
            </Typography>
          </Box>
        );
      })}

      <Box className={classes.getCopy}>
        <Typography>Get your copy :-</Typography>
        <Typography>{` #amazon`}</Typography>
      </Box>

      <Box className={classes.viewShareTags_Cover}>
        <Box className={classes.inline}>
          <Typography className={`${classes.viewIconTags_Heading} interFont`}>
            Views :
          </Typography>
          <Typography>1445</Typography>
        </Box>
        <Box className={classes.inline}>
          <Typography className={`${classes.viewIconTags_Heading} interFont`}>
            Share this :
          </Typography>
          <SocialIcons BlackBloglovin={true} />
        </Box>
        <Box className={classes.inline}>
          <Typography className={`${classes.viewIconTags_Heading} interFont`}>
            Tags :
          </Typography>
          <Typography>Tags, Tags, Tags</Typography>
        </Box>
      </Box>

      <CommentBox />
    </Box>
  );
};

export default Fullpage;
