import React, { useState } from "react";
import { ListBox } from "../shared/ListBox/ListBox";
import TrimmedString from "../shared/TrimmedString";
import { Grid } from "@mui/material";
import bookTourData from "./Data";

const Shared = () => {
  const [bookTours, setBookTour] = useState(bookTourData);
 
  return (
    <Grid container spacing={2}>
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
              content={<TrimmedString data={bookTour}/>}
              slug={bookTour.slug}
              path={`book-tour`}
            />
        );
      })}
    </Grid>
  );
};

export default Shared;
