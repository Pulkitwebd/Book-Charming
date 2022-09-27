import React from "react";
import { Box, Typography,Button } from "@mui/material";
import classes from "./Subcribe.module.css";

const SubcribeBox = () => {
  return (
    <>
      <Box className={classes.box}>
        <Typography className={`${classes.heading} playfairFont`}>Subscrible to our newsletter</Typography>
        <Typography className={`${classes.paragraph} interFont`}>
          Get email notifications about latests posts, book recommendations and
          much more !
        </Typography>
        <Box className={classes.InputAndButton_Box}>
          <input
            type="email"
            placeholder="Type your E-mail"
            className={classes.subcribeTextfield}
          />
          <Button
            variant="outlined"
            className={`${classes.subcribeBtn} interFont`}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SubcribeBox;
