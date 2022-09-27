import React, { useState, useContext } from "react";
import coverReveal_cover from "../../../public/images/coverRevealDetails_cover.png";
import bookCover_mainImg from "../../../public/images/bookCover_mainImg.png";
import bookCover_author from "../../../public/images/bookCover_author.png";
import { BookReviewsContext } from "../../../pages/book-reviews/[slug]";
import { Box, Typography, Stack, Divider } from "@mui/material";
import classes from "./BookCoverDetails.module.css";
import SocialIcons from "../../shared/SocialIcons";
import CommentBox from "../../shared/CommentBox/CommentBox";
import bookReviewData from "../Data";
import Image from "next/image";

const BookCoverDetails = () => {
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
    <Box className={classes.bookCover_fullpage}>
      <Typography className={`${classes.pageHeading} playfairFont`}>
        {data.textHeading}
      </Typography>

      <Box className={classes.mainImgAndDetails}>
        <Box className={classes.mainImageBox}>
          <Image src={bookCover_mainImg}></Image>
        </Box>

        <Box className={classes.bookDetails}>
          <Box>
            <Stack className={`${classes.stack} playfairFont`}>
              <Box>Rating :</Box>
              <Box>Publisher :</Box>
              <Box>Genre :</Box>
              <Box>Publishing year :</Box>
            </Stack>
          </Box>
          <Box>
            <Stack className={`${classes.stack} playfairFont`}>
              <Box>Tellwell Talent</Box>
              <Box>Tellwell Talent</Box>
              <Box>Tellwell Talent</Box>
              <Box>Tellwell Talent</Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box className={classes.coverImg_Box}>
        <Image layout="responsive" src={coverReveal_cover}></Image>
      </Box>

      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Blurb
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>

      <Box>
        <Typography
          className={`${classes.blurbPara} playfairFont`}
        >{`“Some nightmares exist beyond our dreams.Arising from a month-long slumber after discovering she’s more than human, Damina Nicaud moves beyond her dreamscape as a brand new supernatural world unfolds. Torn between new love and a love once lost, Damina grapples with her own predestined fate as she seeks to understand the origin of her lineage
        Coupled with Dacari’s sudden disappearance and the ticking time bomb set by Decaux, a new fight emerges and new enemies are revealed. Damina must now rely on the men at her side to aid her quest to find her cousin while battling growing threats on the horizon.
        Journey back to New Orleans with Damina Nicaud as she awakens with new eyes, diving deeper into the supernatural world of the Order of Altrinion, Scourge vampires, Skull wolves, and more as she wrestles with love, loss, betrayal, and pain..”`}</Typography>
      </Box>

      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Author
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>

      <Box className={classes.aboutAuthor_box}>
        <Box className={classes.imageBox}>
          <Image src={bookCover_author}></Image>
          <Typography className={classes.authorName}>data.author</Typography>
        </Box>
        <Box className={classes.descriptionBox}>
          <Typography className={`${classes.author_description} playfairFont`}>
            {`Ruskin Bond was born to Edith Clarke and Aubrey Alexander Bond,[2][3] in Kasauli, Punjab States Agency, British India. His father taught English to the princesses of Jamnagar palace and Ruskin and his sister Ellen lived there till he was six. Later, Ruskin's father joined the Royal Air Force in 1939 and Ruskin along with his mother and sister went to live at his maternal home at Dehradun. Shortly after that he was sent to a boarding school in Mussourie. When Bond was eight years old, his mother separated from his father and married a Punjabi Hindu, Hari. His father arranged for Ruskin to be brought to New Delhi where he was posted. 
            `}
          </Typography>
        </Box>
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
      <Box className={classes.commentBoxCover}>
        <CommentBox />
      </Box>
    </Box>
  );
};

export default BookCoverDetails;
