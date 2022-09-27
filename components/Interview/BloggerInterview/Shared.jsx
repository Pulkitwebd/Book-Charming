import React, { useState } from "react";
import { ListBox } from "../../shared/ListBox/ListBox";
import TrimmedString from "../../shared/TrimmedString";
import { Grid } from "@mui/material";
import interviewsData from "./Data";

const Shared = () => {
  const [bloggerinterviews, setBloggerInterviews] = useState(interviewsData);
 
  return (
    <Grid container spacing={2}>
      {bloggerinterviews.map((bloggerinterview) => {

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
  );
};

export default Shared;
