import React from "react";
import classes from "./Services.module.css";
import { Box, Grid, Typography } from "@mui/material";
import serviceImg from "../../../public/images/serviceImg.png";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <Box className={classes.serviceBox}>
        <Box className={classes.headerBox}>
          <Typography className={`${classes.headerName} playfairFont`}>
            Services
          </Typography>
        </Box>
        <Box className={classes.cardsBox}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3} lg={3}>
              <Box className={classes.card}>
                <Image src={serviceImg} />
                <Box className={`${classes.cardName} playfairFont`}>
                  Book Reviews
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Box className={classes.card}>
                <Image src={serviceImg} />
                <Box className={`${classes.cardName} playfairFont`}>
                  Book Reviews
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Box className={classes.card}>
                <Image src={serviceImg} />
                <Box className={`${classes.cardName} playfairFont`}>
                  Book Reviews
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Box className={classes.lastCard}>
                <Box className={`${classes.LastcardName} playfairFont`}>
                  More  <i className="fa-solid fa-arrow-up-right"></i>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Services;
