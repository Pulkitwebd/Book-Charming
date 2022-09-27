import { useState, useEffect } from "react";
import { Box, BottomNavigation, Button } from "@mui/material";
import classes from "./Footer.module.css";
import logo from "./../../public/images/logo_alt.png";
import Image from "next/image";
import SocialIcons from "./../shared/SocialIcons";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const scrollToTop = () => {
    setScrollTop((scrollTop) => !scrollTop);
  }

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [scrollTop]);

  return (
    <BottomNavigation
      sx={{ bgcolor: "secondary.main", color: "primary.main" }}
      className={classes.footer}
    >
      <Box className={classes.footerBoxes}>
        <Box className={classes.imglogoBox}>
          <Image
            src={logo}
            layout="intrinsic"
            height={133}
            width={413}
            className={classes.logo}
          />
          <Box
            className={`${classes.email} interFont`}
            style={{ marginLeft: "15px", marginTop: "33px" }}
          >
            bookscharming@gmail.com
          </Box>
          <Box className={classes.iconBox}>
            <SocialIcons BlackBloglovin={false} />
          </Box>
        </Box>
        <Box className={classes.subcribeBox}>
          <Box className={classes.subscribeHeading}>
            <Box textAlign="center">
              <h1>Subscribe to our newsletter</h1>
            </Box>
            <Box fontSize={15} className={`${classes.subcribePara} interFont`}>
              Get email notifications about latests posts, book recommendations
              and much more !
            </Box>
          </Box>
          <Box className={classes.subscribeContent} mt={2}>
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
      </Box>
      <Box className={classes.arrow} style={{ fontSize: "40px" }}>
        <FiChevronUp style={{ cursor: "pointer"}} onClick={scrollToTop} />
      </Box>
    </BottomNavigation>
  );
};

export default Footer;
