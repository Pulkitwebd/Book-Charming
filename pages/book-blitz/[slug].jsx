import React, { createContext } from "react";
import { useRouter } from "next/router";
import Fullpage from "../../components/BookBlitz/BookBlitzDetails/BookBlitzDetails";

const BookBlitzContext = createContext();

const BlogReviews = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <BookBlitzContext.Provider value={slug}>
      <Fullpage />
    </BookBlitzContext.Provider>
  );
};

export default BlogReviews;
export { BookBlitzContext };
