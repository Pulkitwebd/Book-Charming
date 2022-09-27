import React from "react";
import { Box, Typography, Button, Divider, Stack } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FormControl from "@mui/material/FormControl";
import classes from "./CommentBox.module.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const CommentBox = () => {
  return (
    <>
      <Box className={classes.commentNameBox}>
        <Typography className={` ${classes.commentName} playfairFont`}>
          Commennts
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>
      <Box className={classes.commentBoxCover}>
        <Box className={classes.postioningBar}>
          <Box className={classes.searchBarBox}>
            <textarea
              type="text"
              placeholder="Leave as Comment"
              className={classes.searchBar}
              row="1"
            ></textarea>
          </Box>
          <Button className={`${classes.postBtn} interFont`}>Post</Button>
        </Box>

        <Box className={classes.postandCommentas_box}>
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
        </Box>

        <Box className={classes.commentBox}>
          <Box className={classes.logoBox}>
            <Box className={classes.logo}>K</Box>
          </Box>

          <Box className={classes.nameComments_box}>
            <Box className={`${classes.comment_personName} playfairFont`}>
              Kunal Sharma
            </Box>
            <Typography className={`${classes.comment_para} playfairFont`}>
              {` enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum.`}
            </Typography>

            <Box className={classes.relpyBox}>
              <Typography className={classes.replyNumber}>13</Typography>
              <ThumbUpIcon className={classes.likeButton} />
            </Box>
          </Box>
        </Box>

        <Box className={classes.commentBox}>
          <Box className={classes.logoBox}>
            <Box className={classes.logo}>K</Box>
          </Box>
          <Box className={classes.nameComments_box}>
            <Box className={`${classes.comment_personName} playfairFont`}>
              Kunal Sharma
            </Box>
            <Typography className={`${classes.comment_para} playfairFont`}>
              {`enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                          irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt
                          mollit anim id est laborum.`}
            </Typography>
            <Box className={classes.relpyBox}>
              <Typography className={classes.replyNumber}>13</Typography>
              <ThumbUpIcon className={classes.likeButton} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CommentBox;
