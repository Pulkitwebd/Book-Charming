import React, { useState } from "react";
import TrimmedString from "../shared/TrimmedString";
import { ListBox } from "../shared/ListBox/ListBox";
import { Grid } from "@mui/material";
import blogsData from "./Data";

const Shared = () => {
  const [blogs, setBlogs] = useState(blogsData);

  return (
    <Grid container spacing={2}>
      {blogs.map((blog) => {
        return (
          <ListBox
            key={blog.id}
            id={blog.id}
            textHeading={blog.textHeading}
            img={blog.img}
            date={blog.date}
            author={blog.author}
            views={blog.views}
            content={<TrimmedString data={blog} />}
            slug={blog.slug}
            path={`blogs`}
          />
        );
      })}
    </Grid>
  );
};

export default Shared;
