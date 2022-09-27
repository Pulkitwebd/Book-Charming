import React, { useState } from "react";
import { ListBox } from "../../shared/ListBox/ListBox";
import TrimmedString from "../../shared/TrimmedString";
import { Grid } from "@mui/material";
import interviewsData from "./Data";
import Link from "next/link";

const Shared = () => {
  const [authorinterviews, setAuthorInterviews] = useState(interviewsData);
 
  return (
    <Grid container spacing={2}>
      {authorinterviews.map((authorinterview) => {

        return (
            <ListBox
              key={authorinterview.id}
              id={authorinterview.id}
              textHeading={authorinterview.textHeading}
              img={authorinterview.img}
              date={authorinterview.date}
              author={authorinterview.author}
              views={authorinterview.views}
              content={<TrimmedString data={authorinterview}/>}
              slug={authorinterview.slug}
              path={`interviews/author-interviews`}
            />
        );
      })}
    </Grid>
  );
};

export default Shared;
