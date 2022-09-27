import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { ListBoxHeader, ListBox } from "../shared/ListBox/ListBox";
import classes from "../shared/ListBox/ListBox.module.css";

const Bookblitz = ({ data }) => {
  const [bookBlitzs, setBookBlitzs] = useState(data);

  return (
    <Box className={classes.listBoxCover}>
      <ListBoxHeader headerName={"Book Blitz"}  path={"/book-blitz"} />
      <Box className={classes.inner_BoxCover}>
        <Grid container spacing={2} sx={{ marginTop: "-10px" }}>
          {bookBlitzs.map((bookBlitz) => {
            return (
                <ListBox
                  key={bookBlitz.id}
                  id={bookBlitz.id}
                  textHeading={bookBlitz.textHeading}
                  img={bookBlitz.img}
                  date={bookBlitz.date}
                  author={bookBlitz.author}
                  views={bookBlitz.views}
                  content={bookBlitz.content}
                  slug={bookBlitz.slug}
                  path={`book-blitz`}
                />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Bookblitz;
