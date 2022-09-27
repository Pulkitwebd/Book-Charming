import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import classes from "../shared/ListBox/ListBox.module.css";
import { ListBox, ListBoxHeader } from "../shared/ListBox/ListBox";

const BookReview = ({ data }) => {
  const [bookReviews, setBookReviews] = useState(data);

  return (
    <Box className={classes.listBoxCover}>
      <ListBoxHeader headerName={"Book Reviews"}  path={"/book-reviews"}/>
      <Box className={classes.inner_BoxCover}>
        <Grid container spacing={2} sx={{ marginTop: "-10px" }}>
          {bookReviews.map((bookReview) => {
            return (
              <ListBox
                key={bookReview.id}
                id={bookReview.id}
                bookCategory={bookReview.bookCategory}
                textHeading={bookReview.textHeading}
                img={bookReview.img}
                date={bookReview.date}
                author={bookReview.author}
                views={bookReview.views}
                content={bookReview.content}
                slug={bookReview.slug}
                path={`book-reviews`}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default BookReview;
