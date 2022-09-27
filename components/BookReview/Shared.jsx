import React, { useState } from "react";
import { ListBox } from "../shared/ListBox/ListBox";
import TrimmedString from "../shared/TrimmedString";
import { Grid } from "@mui/material";
import bookReviewsData from "./Data";

const Shared = () => {
  const [bookReviews, setBookReviews] = useState(bookReviewsData);
  
  return (
    <Grid container spacing={2}>
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
            content={<TrimmedString data={bookReview} />}
            slug={bookReview.slug}
            path={`book-reviews`}
          />
        );
      })}
    </Grid>
  );
};

export default Shared;
