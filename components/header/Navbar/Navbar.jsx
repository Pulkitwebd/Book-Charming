import { useState } from "react";
import { Box, Divider } from "@mui/material";
import Image from "next/image";
import mobile_logo from "../../../public/images/mobile_logo.png";
import classes from "../Navbar/Navbar.module.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DesktopMenu, MobileMenu } from "./Menu";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
    setSearchBar(false);
  };

  const toggleSearchBar = () => {
    setSearchBar((prevState) => !prevState);
    setSideBar(false);
  };

  return (
    <Box className={classes.navbarBox}>
      <Box className={`${classes.desktopBox} interFont`}>
        <DesktopMenu />
      </Box>
      <Box className={classes.mobileBox}>
        <Box className={classes.mobileinnerBox}>
          <MenuIcon className={classes.menuIcon} onClick={toggleSideBar} />
          <Box>
            <Image
              src={mobile_logo}
              layout="intrinsic"
              height={41}
              width={119}
            />
          </Box>
        </Box>
        <Box className={classes.searchBox}>
          <SearchTwoToneIcon onClick={toggleSearchBar} />
        </Box>
      </Box>
      {sideBar && (
        <Box className={classes.sidebar}>
          <SimpleBar style={{maxHeight: "600px" }}>
            <CloseIcon className={classes.closeIcon} onClick={toggleSideBar} />
            <Box className={classes.sidebarNavigation}>
              <MobileMenu
                handleClick={() => {
                  setSideBar(false);
                  setSearchBar(false);
                }}
              />
            </Box>
            <Divider variant="middle" className={classes.divider} />
            <Box className={classes.sidebarLogo}>
              <Image
                src={mobile_logo}
                layout="intrinsic"
                height={55}
                width={160}
              />
            </Box>
          </SimpleBar>
        </Box>
      )}
      {searchBar && !sideBar && (
        <Box className={classes.searchsidebar}>
          <Box className={classes.seachBoxCover}>
            <Box className={classes.searchBarBox}>
              <input
                type="text"
                placeholder="Search"
                className={classes.searchBar}
              ></input>
              <SearchTwoToneIcon
                classes={{ color: "black", width: "14px", height: "14px" }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
