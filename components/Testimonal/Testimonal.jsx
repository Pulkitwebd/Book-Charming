import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import classes from "./Testimonal.module.css";
import Image from "next/image";
import testimonalData from "./Data";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Testimonal = () => {
  const [data, setData] = useState(testimonalData);

  return (
    <Box className={classes.testimonalPage}>
      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Testimonals
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>
      <Box className={`${classes.sortbyBox} interFont`}>
        <Typography>Sort by:</Typography>
        <FormControl
          sx={{ m: 1, minWidth: 40 }}
          variant="standard"
          className={classes.FormControl}
        >
          <Select defaultValue={1} className={classes.select}>
            <MenuItem value={1}>lastest</MenuItem>
            <MenuItem value={2}>Thirty</MenuItem>
            <MenuItem value={3}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {data.map((testimonal, index) => {
        if (testimonal.id % 2 != 0) {
          return (
            <Box className={classes.testimonalBox} key={index}>
              <Box className={classes.innerimageBox}>
                <Image src={testimonal.image}></Image>
              </Box>
              <Box className={classes.odddescriptionBox}>
                <Typography className={`${classes.decription} playfairFont`}>
                  {testimonal.description}
                </Typography>
              </Box>
              <Box className={classes.writerNameBoxOdd}>
                <Box className={classes.innerWriterBox}>
                  <Box className={classes.oddline}></Box>
                  <Box className={classes.writerName}>
                    {testimonal.writerName}
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        } else {
          return (
            <Box className={classes.testimonalBox} key={index}>
              <Box className={classes.evendescriptionBox}>
                <Typography className={`${classes.decription} playfairFont`}>
                  {testimonal.description}
                </Typography>
              </Box>
              <Box className={classes.innerimageBox}>
                <Image src={testimonal.image}></Image>
              </Box>
              <Box className={classes.writerNameBoxEven}>
                <Box className={classes.innerWriterBox}>
                  <Box className={classes.writerName}>
                    {testimonal.writerName}
                  </Box>
                  <Box className={classes.evenline}></Box>
                </Box>
              </Box>
            </Box>
          );
        }
      })}
      <Box className={classes.loadmore}>
        <p style={{ cursor: "pointer" }}>Load more</p>
      </Box>
    </Box>
  );
};

export default Testimonal;
