import React, { useState, useContext } from "react";
import { BloggerContext } from "../../../pages/interviews/blogger-interviews/[slug]";
import { AuthorContext } from "../../../pages/interviews/author-interviews/[slug]";
import fullpage_image from "../../../public/images/interview_fullpage.png";
import bloggerInterviewsData from "../BloggerInterview/Data";
import authorInterviewsData from "../AuthorInterview/Data";
import CommentBox from "../../shared/CommentBox/CommentBox";
import classes from "./InterviewDetails.module.css";
import SocialIcons from "../../shared/SocialIcons";
import { Box, Typography } from "@mui/material";
import fullpage_data from "./Data.jsx";
import Image from "next/image";

const Shared = () => {
  const [questionAnswers, setQuestionAnswers] = useState(fullpage_data);

  const [authorInterviews, setAuthorInterviews] =
    useState(authorInterviewsData);

  const [bloggerInterviews, setBloggerInterviews] = useState(
    bloggerInterviewsData
  );

  const authorSlug = useContext(AuthorContext);
  const bloggerSlug = useContext(BloggerContext);

  var gettingData = () => {
    var authorPageArray = authorInterviews.find(
      (authorInterview) => authorInterview.slug === authorSlug
    );

    var bloggerPageArray = bloggerInterviews.find(
      (bloggerInterview) => bloggerInterview.slug === bloggerSlug
    );

    if (authorPageArray == undefined) {
      return bloggerPageArray;
    } else if (bloggerPageArray == undefined) {
      return authorPageArray;
    }
  };

  var data = gettingData();

  return (
    <Box className={classes.interview_fullpage}>
      {data && (
        <>
          <Typography className={`${classes.heading} playfairFont`}>
            {data.textHeading}
          </Typography>

          <Box className={classes.aboutAuthor_box}>
            <Box className={classes.imageBox}>
              <Image src={fullpage_image}></Image>
              <Typography className={classes.authorName}>
                {data.author}
              </Typography>
            </Box>
            <Box className={classes.descriptionBox}>
              <Typography
                className={`${classes.author_description} playfairFont`}
              >
                {data.content}
              </Typography>
            </Box>
          </Box>

          {questionAnswers.map((QuestionAnswer, id) => {
            return (
              <Box key={id} className={classes.questionAnswer_Box}>
                <Typography className={`${classes.question} playfairFont`}>
                  {QuestionAnswer.question}
                </Typography>
                <Typography className={`${classes.answer} interFont`}>
                  {QuestionAnswer.answer}
                </Typography>
              </Box>
            );
          })}

          <Box className={classes.viewShareTags_Cover}>
            <Box className={classes.inline}>
              <Typography
                className={`${classes.viewIconTags_Heading} interFont`}
              >
                Views :
              </Typography>
              <Typography>1445</Typography>
            </Box>
            <Box className={classes.inline}>
              <Typography
                className={`${classes.viewIconTags_Heading} interFont`}
              >
                Share this :
              </Typography>
              <SocialIcons BlackBloglovin={true} />
            </Box>
            <Box className={classes.inline}>
              <Typography
                className={`${classes.viewIconTags_Heading} interFont`}
              >
                Tags :
              </Typography>
              <Typography>Tags, Tags, Tags</Typography>
            </Box>
          </Box>

          <CommentBox />
        </>
      )}
    </Box>
  );
};

export default Shared;
