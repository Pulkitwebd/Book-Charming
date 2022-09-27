import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { ListBoxHeader, ListBox } from "../shared/ListBox/ListBox";
import classes from "../shared/ListBox/ListBox.module.css";

const Blog = ({ data }) => {
  const [blogs, setBlogs] = useState(data);

  return (
    <Box className={classes.listBoxCover}>
      <ListBoxHeader headerName={"Blogs"} path={"/blogs"} />
      <Box className={classes.inner_BoxCover}>
        <Grid container spacing={2} sx={{ marginTop: "-10px" }}>
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
                content={blog.content}
                slug={blog.slug}
                path={`blogs`}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Blog;
