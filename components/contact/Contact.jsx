import React from "react";
import { Box, Divider } from "@mui/material";
import classes from "./contact.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Box className={classes.pageBox}>
      <Box className={`${classes.contactName} .playfairFont`}>Contact</Box>
      <Divider variant="middle" className={classes.divider} />
      <Box className={`${classes.paragraph} interFont`}>
        If you ever have any comments, inquiries or just want to say
        something, you can send me an email at
        <span style={{ color: "rgba(54, 135, 255, 1)" }}>
          {` bookscharming@gmail.com `}
        </span>
        or connect with me on
      </Box>
      <Box className={classes.iconsBox} style={{ fontSize: "31px" }}>
         <FaFacebookF />
         <FaInstagram />
         <FaLinkedinIn />
         <FaTwitter />
      </Box>
    </Box>
  );
};

export default Contact;
