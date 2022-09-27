import { Box, Grid, AppBar } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/images/header_logo.png";
import classes from "../Topbar/Topbar.module.css";
import SocialIcons from "../../shared/SocialIcons";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";


const Topbar = () => {
    return (
      <AppBar className={classes.headerBox}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box className={classes.iconBox}>
              <SocialIcons BlackBloglovin={true} />
            </Box>
          </Grid>
          <Grid item md={4} lg={4} className={classes.logoBox}>
            <Image src={logo} layout="intrinsic" height={77} width={223} />
            <Box className="interFont">
              <h1 className={classes.logoline}>{ "India's Top Book Blog" }</h1>
            </Box>
          </Grid>
          <Grid item md={4} lg={4} className={classes.searchBox}>
            <Box className={classes.searchBarBox}>
              <input
                type="text"
                placeholder="Search"
                className={classes.searchBar}
              ></input>
              <SearchTwoToneIcon />
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    );
  };

  export default Topbar;