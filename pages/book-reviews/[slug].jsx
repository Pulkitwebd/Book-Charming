import React, { createContext } from "react";
import { useRouter } from "next/router";
import Fullpage from "../../components/BookReview/BookReviewDetails/BookReviewDetails";

const BookReviewsContext = createContext();

const BlogReviews = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <BookReviewsContext.Provider value={slug}>
      <Fullpage />
    </BookReviewsContext.Provider>
  );
};

export default BlogReviews;
export { BookReviewsContext };
