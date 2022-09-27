import React, { useState } from "react";
import { ListBox, ListBoxHeader } from "../shared/ListBox/ListBox";
import TrimmedString from "../shared/TrimmedString";
import { Grid, Box } from "@mui/material";
import interviewsData from "./Data";
import Link from "next/link";

const BloggerInterviews = () => {
  const [data, setData] = useState(interviewsData);

  return (
    <>
      <Box style={{ marginBottom: "10px" }}>
        <ListBoxHeader
          headerName={"Blogger Interviews"}
          path={"/interviews/blogger-interviews"}
        />
      </Box>
      <Link href="interviews/fullpage">
      <Grid container spacing={2}>
        {data[1].bloggerInterviews.map((bloggerinterview) => {
      
          return (
            <ListBox
              key={bloggerinterview.id}
              id={bloggerinterview.id}
              textHeading={bloggerinterview.textHeading}
              img={bloggerinterview.img}
              date={bloggerinterview.date}
              author={bloggerinterview.author}
              views={bloggerinterview.views}
              content={<TrimmedString data={bloggerinterview} />}
              slug={bloggerinterview.slug}
              path={`interviews/blogger-interviews`}
            />
          );
        })}
      </Grid>
      </Link>
    </>
  );
};

export default BloggerInterviews;
