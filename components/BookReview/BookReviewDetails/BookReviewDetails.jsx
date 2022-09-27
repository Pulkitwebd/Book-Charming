import React, { useState, useContext } from "react";
import { BookReviewsContext } from "../../../pages/book-reviews/[slug]";
import bookReviewImg from "../../../public/images/bookReview.png";
import CommentBox from "../../shared/CommentBox/CommentBox";
import { Box, Typography, Stack } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import SocialIcons from "../../shared/SocialIcons";
import classes from "./BookReviewDetails.module.css";
import bookReviewData from "../Data";
import Image from "next/image";

const Fullpage = () => {
  const [bookReviews, setBookReviews] = useState(bookReviewData);

  const bookReviewSlug = useContext(BookReviewsContext);

  var gettingData = () => {
    var BookReviewArray = bookReviews.find(
      (bookReview) => bookReview.slug === bookReviewSlug
    );

    if (BookReviewArray == undefined) {
      return false;
    }

    return BookReviewArray;
  };

  var data = gettingData();

  return (
    <Box className={classes.bookReviews_fullpage}>
      <Typography className={`${classes.pageHeading} playfairFont`}>
        {data.textHeading}
      </Typography>

      <Box className={classes.imgAndDetails}>
        <Box className={classes.imageBox}>
          <Image src={bookReviewImg}></Image>
        </Box>

        <Box className={classes.bookDetails}>
          <Box>
            <Stack className={`${classes.stack} playfairFont`}>
              <Box>Rating :</Box>
              <Box>Publisher :</Box>
              <Box>Genre :</Box>
              <Box>Publishing year :</Box>
              <Box>Language :</Box>
              <Box>ISBN :</Box>
              <Box>Pages :</Box>
            </Stack>
          </Box>
          <Box>
            <Stack className={`${classes.stack} playfairFont`}>
              <Box className={classes.rating}>
                <ReactStars
                  count={5}
                  value={1}
                  size={24}
                  activeColor="#000000"
                  edit={false}
                />
              </Box>
              <Box>Tellwell Talent</Box>
              <Box>Tellwell Talent</Box>
              <Box>Tellwell Talent</Box>
              <Box>Tellwell Talent</Box>
              <Box>Tellwell Talent</Box>
              <Box>Tellwell Talent</Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box className={classes.bookHeading_box}>
        <Typography
          className={`${classes.bookHeading} playfairFont `}
        >{`“ loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. “`}</Typography>
      </Box>

      <Box className={`${classes.paragraphBox} playfairFont`}>
        <Typography>{data.content}</Typography>
      </Box>

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
