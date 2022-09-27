import { Box } from "@mui/material";
import bloglovinWhite from "./../../public/icons/bloglovinWhite.svg";
import bloglovinBlack from "./../../public/icons/bloglovinBlack.svg";
import Image from "next/image";
import {
  FaAmazon,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTumblr,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialMediaIcon = ({ BlackBloglovin }) => {
  return (
    <Box>
      <FaAmazon className="mr-10" style={{ marginTop: "3px" }} />
      <Image src={BlackBloglovin == true ? bloglovinBlack : bloglovinWhite} height={17}/>
      <FaFacebookF className="mr-10 ml-10" />
      <FaInstagram className="mr-10" />
      <FaLinkedinIn className="mr-10" />
      <FaPinterestP className="mr-10" />
      <FaTumblr className="mr-10" />
      <FaTwitter className="mr-10" />
      <FaYoutube />
    </Box>
  );
};

export default SocialMediaIcon;
