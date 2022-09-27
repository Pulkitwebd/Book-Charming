import React from "react";
import { ListBoxHeader } from "../../shared/ListBox/ListBox";
import classes from "./Testimonal.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";
import testimonal from "../../../public/images/testimonal.png";

const Testimonal = () => {
  return (
    <>
      <Box className={classes.testimonalBox}>
        <ListBoxHeader headerName={"Testimonal"} path={"/testimonal"}/>
      </Box>
      <Swiper
        cssMode={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className={classes.swiper}
      >
        <SwiperSlide className={classes.slide}>
          <Box className={classes.imageBox}>
            <Image src={testimonal}></Image>
          </Box>
          <Box className={classes.descriptionBox}>
            <Typography className={`${classes.decription} playfairFont`}>
              I strongly believe in fast disappearing values of honesty and
              integrity. When I left my book in Books Charming&rsquo;s care, I
              expected an honest critique from them. Well, the outcome was
              superb. I discovered several new insights into my book through
              their review. It sure was a revelation to me. My interview with
              them was another winner. Hats off to the whole team at Books
              Charming. The whole experience has been memorable. I would join
              hands again with them with my next book. Best wishes.-{" "}
            </Typography>
          </Box>
          <Box className={classes.writerNameBox}>
            <Box className={classes.innerWriterBox}>
              <Box className={classes.line}></Box>
              <Box className={classes.writerName}>Mukul Ranjan</Box>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={classes.slide}>
          <Box className={classes.imageBox}>
            <Image src={testimonal}></Image>
          </Box>
          <Box className={classes.descriptionBox}>
            <Typography className={`${classes.decription} playfairFont`}>
              I strongly believe in fast disappearing values of honesty and
              integrity. When I left my book in Books Charming&rsquo;s care, I
              expected an honest critique from them. Well, the outcome was
              superb. I discovered several new insights into my book through
              their review. It sure was a revelation to me. My interview with
              them was another winner. Hats off to the whole team at Books
              Charming. The whole experience has been memorable. I would join
              hands again with them with my next book. Best wishes.-{" "}
            </Typography>
          </Box>
          <Box className={classes.writerNameBox}>
            <Box className={classes.innerWriterBox}>
              <Box className={classes.line}></Box>
              <Box className={classes.writerName}>Mukul Ranjan</Box>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={classes.slide}>
          <Box className={classes.imageBox}>
            <Image src={testimonal}></Image>
          </Box>
          <Box className={classes.descriptionBox}>
            <Typography className={`${classes.decription} playfairFont`}>
              I strongly believe in fast disappearing values of honesty and
              integrity. When I left my book in Books Charming&rsquo;s care, I
              expected an honest critique from them. Well, the outcome was
              superb. I discovered several new insights into my book through
              their review. It sure was a revelation to me. My interview with
              them was another winner. Hats off to the whole team at Books
              Charming. The whole experience has been memorable. I would join
              hands again with them with my next book. Best wishes.-{" "}
            </Typography>
          </Box>
          <Box className={classes.writerNameBox}>
            <Box className={classes.innerWriterBox}>
              <Box className={classes.line}></Box>
              <Box className={classes.writerName}>Mukul Ranjan</Box>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={classes.slide}>
          <Box className={classes.imageBox}>
            <Image src={testimonal}></Image>
          </Box>
          <Box className={classes.descriptionBox}>
            <Typography className={`${classes.decription} playfairFont`}>
              I strongly believe in fast disappearing values of honesty and
              integrity. When I left my book in Books Charming&rsquo;s care, I
              expected an honest critique from them. Well, the outcome was
              superb. I discovered several new insights into my book through
              their review. It sure was a revelation to me. My interview with
              them was another winner. Hats off to the whole team at Books
              Charming. The whole experience has been memorable. I would join
              hands again with them with my next book. Best wishes.-{" "}
            </Typography>
          </Box>
          <Box className={classes.writerNameBox}>
            <Box className={classes.innerWriterBox}>
              <Box className={classes.line}></Box>
              <Box className={classes.writerName}>Mukul Ranjan</Box>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={classes.slide}>
          <Box className={classes.imageBox}>
            <Image src={testimonal}></Image>
          </Box>
          <Box className={classes.descriptionBox}>
            <Typography className={`${classes.decription} playfairFont`}>
              I strongly believe in fast disappearing values of honesty and
              integrity. When I left my book in Books Charming&rsquo;s care, I
              expected an honest critique from them. Well, the outcome was
              superb. I discovered several new insights into my book through
              their review. It sure was a revelation to me. My interview with
              them was another winner. Hats off to the whole team at Books
              Charming. The whole experience has been memorable. I would join
              hands again with them with my next book. Best wishes.-{" "}
            </Typography>
          </Box>
          <Box className={classes.writerNameBox}>
            <Box className={classes.innerWriterBox}>
              <Box className={classes.line}></Box>
              <Box className={classes.writerName}>Mukul Ranjan</Box>
            </Box>
          </Box>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Testimonal;