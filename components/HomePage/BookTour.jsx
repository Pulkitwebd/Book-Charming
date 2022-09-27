import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import classes from "../shared/ListBox/ListBox.module.css";
import { ListBox, ListBoxHeader } from "../shared/ListBox/ListBox";

const BookTour = ({ data }) => {
  const [bookTours, setBookTours] = useState(data);

  return (
    <Box className={classes.listBoxCover}>
      <ListBoxHeader headerName={"Book Tour"}  path={"/book-tour"}/>
      <Box className={classes.inner_BoxCover}>
        <Grid container spacing={2} sx={{ marginTop: "-10px" }}>
          {bookTours.map((bookTour) => {
            return (
              <ListBox
                key={bookTour.id}
                id={bookTour.id}
                textHeading={bookTour.textHeading}
                img={bookTour.img}
                date={bookTour.date}
                author={bookTour.author}
                views={bookTour.views}
                content={bookTour.content}
                slug={bookTour.slug}
                path={`book-tour`}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default BookTour;
