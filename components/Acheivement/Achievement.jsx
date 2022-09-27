import React, { useState } from "react";
import achievementData from "./Data.jsx";
import classes from "./Achievement.module.css";
import Image from "next/image";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { SRLWrapper } from "simple-react-lightbox";

const Acheivement = () => {
  const [data, setData] = useState(achievementData);

  return (
    <Box className={classes.testimonalPage}>
      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Acheivement
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>

      <Box className={classes.awardsCertificate_Box}>
        <Box className={classes.awardsCertificate_header}>
          <Typography className={`${classes.headerName} interFont`}>
            Awards and Certificates
          </Typography>
        </Box>
        <SRLWrapper>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
          >
            {data[0].awardsAndCerticate.map((certificate, index) => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                    <Box className={classes.certificateBox}>
                      <Box className={classes.imageWrapper}>
                        <Image src={certificate.image}></Image>
                      </Box>
                      <Typography
                        className={`${classes.certificateName} playfairFont`}
                      >
                        {certificate.name}
                      </Typography>
                      <Typography className={`${classes.givenBy} interFont `}>
                        {certificate.givenBy}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </SRLWrapper>
      </Box>

      <Box className={classes.feature_Box}>
        <Box className={classes.feature_header}>
          <Typography className={`${classes.headerName} interFont`}>
            Feature On
          </Typography>
        </Box>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
        >
          {data[1].featureOn.map((featureon, index) => {
            return (
              <>
                <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                  <a href={featureon.link} target="_blank" rel="noreferrer" >
                    <Box
                      className={classes.certificateBox}
                      style={{ cursor: "Pointer" }}
                    >
                      <Image src={featureon.image}></Image>
                      <Typography
                        className={`${classes.certificateName} playfairFont`}
                      >
                        {featureon.name}
                      </Typography>
                      <Typography className={`${classes.givenBy} interFont `}>
                        {featureon.date}
                      </Typography>
                    </Box>
                  </a>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>

      <Box className={classes.interview_Box}>
        <Box className={classes.feature_header}>
          <Typography className={`${classes.headerName} interFont`}>
            Interviews
          </Typography>
        </Box>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
        >
          {data[2].interviews.map((interview, index) => {
            return (
              <>
                <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                  <a
                    href={
                      interview.link === null
                        ? "/about/achievement"
                        : interview.link
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      className={classes.certificateBox}
                      style={{ cursor: "Pointer" }}
                    >
                      <Image src={interview.image}></Image>
                      <Typography
                        className={`${classes.certifateName} playfairFont`}
                      >
                        {interview.name}
                      </Typography>
                      <Typography className={`${classes.givenBy} interFont `}>
                        {interview.date}
                      </Typography>
                    </Box>
                  </a>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Acheivement;
