import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import classes from "./BookReviewsIndex.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Shared from "./Shared";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";

const BookReviews = () => {
  const [value, setValue] = React.useState(null);

  return (
    <Box className={classes.bookReview_page}>
    
      <Box className={classes.pageNameBox}>
        <Typography className={` ${classes.pageName} playfairFont`}>
          Book Reviews
        </Typography>
        <Divider className={classes.divider} variant="middle"></Divider>
      </Box>

      <Box className={classes.input_Box}>
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

        <Box className={classes.postioningBar}>
          <Box className={classes.searchBarBox}>
            <input
              type="text"
              placeholder="Book Name"
              className={classes.searchBar}
            ></input>
          </Box>
        </Box>

        <Box className={classes.postioningBar}>
          <Box className={classes.searchBarBox}>
            <input
              type="text"
              placeholder="Author Name"
              className={classes.searchBar}
            ></input>
          </Box>
        </Box>

        <Box className={classes.postioningBar}>
          <Box className={classes.searchBarBox}>
            <input
              type="text"
              placeholder="Rating"
              className={classes.searchBar}
            ></input>
          </Box>
        </Box>

        <Box className={classes.postioningYearBar}>
          <Box className={classes.datePickerBox}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                disableFuture
                label=" "
                openTo="year"
                views={["year"]}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <Box className={classes.yearTextFiledCover}>
                    <TextField
                      {...params}
                      className={classes.yearTextField}
                    ></TextField>
                  </Box>
                )}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Button className={`${classes.searchBtn} interFont`}>Search</Button>
      </Box>

      <Box className={classes.shared}>
        <Shared />
      </Box>

      <Box className={classes.loadmore}>
        <Typography className={`playfairFont`}>Load more</Typography>
      </Box>
    </Box>
  );
};

export default BookReviews;