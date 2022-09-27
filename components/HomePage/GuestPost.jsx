import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import classes from "../shared/ListBox/ListBox.module.css";
import { ListBox, ListBoxHeader } from "../shared/ListBox/ListBox";

const Guestpost = ({ data }) => {
  const [guesPosts, setGuestPosts] = useState(data);

  return (
    <Box className={classes.listBoxCover}>
      <ListBoxHeader headerName={"Guest Post"}  path={"/guestpost"}/>
      <Box className={classes.inner_BoxCover}>
        <Grid container spacing={2} sx={{ marginTop: "-10px" }}>
          {guesPosts.map((guesPost) => {
            return (
              <ListBox
                key={guesPost.id}
                id={guesPost.id}
                textHeading={guesPost.textHeading}
                img={guesPost.img}
                date={guesPost.date}
                author={guesPost.author}
                views={guesPost.views}
                content={guesPost.content}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Guestpost;
