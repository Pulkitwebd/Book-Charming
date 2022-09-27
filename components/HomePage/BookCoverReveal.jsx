import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { ListBoxHeader, ListBox } from "../shared/ListBox/ListBox";
import classes from "../shared/ListBox/ListBox.module.css";

const BookCoverReveal = ({ data }) => {
  const [bookCovers, setBookCovers] = useState(data);

  return (
    <Box className={classes.listBoxCover}>
      <ListBoxHeader headerName={"Book Cover Reveal"}  path={"/book-cover"} />
      <Box className={classes.inner_BoxCover}>
        <Grid container spacing={2} sx={{ marginTop: "-10px" }}>
          {bookCovers.map((bookCover) => {
            return (
              <>
                <ListBox
                  key={bookCover.id}
                  id={bookCover.id}
                  textHeading={bookCover.textHeading}
                  img={bookCover.img}
                  date={bookCover.date}
                  author={bookCover.author}
                  views={bookCover.views}
                  content={bookCover.content}
                  path={`book-cover`}
                  slug={bookCover.slug}
                />
              </>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default BookCoverReveal;
