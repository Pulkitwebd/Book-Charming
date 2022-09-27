import React, { useState } from "react";
import { ListBox } from "../../components/shared/ListBox/ListBox";
import TrimmedString from "../../components/shared/TrimmedString";
import { Grid } from "@mui/material";
import bookCoverData from "./Data";

const Shared = () => {
  const [bookCovers, bookCover] = useState(bookCoverData);
 
  return (
    <Grid container spacing={2}>
      {bookCovers.map((bookCover) => {

        return (
            <ListBox
              key={bookCover.id}
              id={bookCover.id}
              textHeading={bookCover.textHeading}
              img={bookCover.img}
              date={bookCover.date}
              author={bookCover.author}
              views={bookCover.views}
              content={<TrimmedString data={bookCover}/>}
              slug={bookCover.slug}
              path={`book-cover`}
            />
        );
      })}
    </Grid>
  );
};

export default Shared;
