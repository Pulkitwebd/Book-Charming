import React, { useState } from "react";
import classes from "./Services.module.css";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Divider, Button } from "@mui/material";
import Testimonal from "../HomePage/Testimonial/Testimonal";
import SERVICES_DATA from "./Data";

const Services = () => {
  const [services, setServices] = useState(SERVICES_DATA);
  return (
    <>
      <Box className={classes.servicesPage}>
        <Box className={classes.pageNameBox}>
          <Typography className={` ${classes.pageName} playfairFont`}>
            Services
          </Typography>
          <Divider className={classes.divider} variant="middle"></Divider>
        </Box>
        {services.map((service, index) => {
          if (service.id % 2 != 0) {
            return (
              <Box className={classes.serviceBox} key={index}>
                <Box className={classes.imageBox}>
                  <Image src={service.img}></Image>
                </Box>
                <Box className={classes.descriptionBox}>
                  <Box>
                    <Typography
                      className={`${classes.descriptionHeading} playfairFont`}
                    >
                      {service.heading}
                    </Typography>
                  </Box>
                  <Typography className={`${classes.description} playfairFont`}>
                    {service.content}
                  </Typography>
                  <Box className={classes.buttonBox}>
                    <Button className={`${classes.button} interFont`}>
                      <Link href="/contact">Contact</Link>
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          } else {
            return (
              <Box className={classes.serviceBox} key={index}>
                <Box className={classes.descriptionBox}>
                  <Box>
                    <Typography
                      className={`${classes.descriptionHeading} playfairFont`}
                    >
                      {service.heading}
                    </Typography>
                  </Box>
                  <Typography className={`${classes.description} playfairFont`}>
                    {service.content}
                  </Typography>
                  <Box className={classes.buttonBox}>
                    <Button className={`${classes.button} interFont`}>
                      <Link href="/contact">Contact</Link>
                    </Button>
                  </Box>
                </Box>
                <Box className={classes.imageBoxEven}>
                  <Image src={service.img}></Image>
                </Box>
              </Box>
            );
          }
        })}
      </Box>
      <Box className={classes.testimonalBox}>
        <Testimonal />
      </Box>
    </>
  );
};

export default Services;
