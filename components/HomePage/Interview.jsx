import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import classes from "../shared/ListBox/ListBox.module.css";
import { ListBox, ListBoxHeader } from "../shared/ListBox/ListBox";

const Interview = ({ data }) => {
  const [interviews, setInterviews] = useState(data);

  return (
    <Box className={classes.listBoxCover}>
      <ListBoxHeader headerName={"Interviews"}  path={"/interviews"}/>
      <Box className={classes.inner_BoxCover}>
        <Grid container spacing={2} sx={{ marginTop: "-10px" }}>
          {interviews.map((interview) => {
            return (
              <ListBox
                key={interview.id}
                id={interview.id}
                textHeading={interview.textHeading}
                img={interview.img}
                date={interview.date}
                author={interview.author}
                views={interview.views}
                content={interview.content}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Interview;
