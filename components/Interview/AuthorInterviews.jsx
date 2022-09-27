import React, { useState } from "react";
import { ListBox, ListBoxHeader } from "../shared/ListBox/ListBox";
import TrimmedString from "../shared/TrimmedString";
import { Grid, Box } from "@mui/material";
import interviewsData from "./Data";
import Link from "next/link";

const AuthorInterviews = () => {
  const [data, setData] = useState(interviewsData);

  return (
    <>
      <Box style={{ marginBottom: "10px" }}>
        <ListBoxHeader
          headerName={"Author Interviews"}
          path={"/interviews/author-interviews"}
        />
      </Box>
      <Link href="/interviews/fullpage">
        <Grid container spacing={2}>
          {data[0].authorInterviews.map((authorinterview) => {

            return (
              <ListBox
                key={authorinterview.id}
                id={authorinterview.id}
                textHeading={authorinterview.textHeading}
                img={authorinterview.img}
                date={authorinterview.date}
                author={authorinterview.author}
                views={authorinterview.views}
                content={<TrimmedString data={authorinterview} />}
                slug={authorinterview.slug}
                path={`interviews/author-interviews`}
              />
            );
          })}
        </Grid>
      </Link>
    </>
  );
};

export default AuthorInterviews;
