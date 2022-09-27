import React, { useState } from "react";
import { ListBox } from "../shared/ListBox/ListBox";
import TrimmedString from "../shared/TrimmedString";
import { Grid } from "@mui/material";
import bookBlitzData from "./Data";

const Shared = () => {
  const [bookBlitzs, setBookBlitzs] = useState(bookBlitzData);
 
  return (
    <Grid container spacing={2}>
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
              content={<TrimmedString data={bookBlitz}/>}
              slug={bookBlitz.slug}
              path={`book-blitz`}
            />
        );
      })}
    </Grid>
  );
};

export default Shared;
