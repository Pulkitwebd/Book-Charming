import React, { useState } from "react";
import classes from "./Hero.module.css";
import data from "./HeroData";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TrimmedString from "../../shared/TrimmedString";

const Hero = () => {
  const [slides, setSlides] = useState(data);

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className={classes.swiper}
    >
      {slides.map((slide) => {
        
        return (
          <SwiperSlide className={classes.slide_wrapper} key={slide.id}>
            <Box className={classes.swiper_slide}>
              <Box className={classes.imgBox}>
                <Image src={slide.image} layout="responsive" height={330} />
              </Box>
              <Box className={classes.textBox}>
                <Box>
                  <Typography className={`${classes.contentType} interFont`}>
                    {slide.content_type}
                  </Typography>
                </Box>
                <Box>
                  <Typography className={`${classes.heading} playfairFont`}>
                    {slide.heading}
                  </Typography>
                </Box>
                <Box className={`${classes.dateAuthorViewBox} interFont`}>
                  <Typography>{slide.date}</Typography>
                  <Typography>{slide.authorName}</Typography>
                </Box>
                <Box className={classes.contentBox}>
                  <Typography className={`${classes.content} playfairFont`}>
                    {<TrimmedString data={slide}/>}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Hero;
