import React, { createContext } from "react";
import { useRouter } from "next/router";
import Fullpage from "../../components/Blog/BlogDetails/BlogDetails";

const BlogsContext = createContext();

const Interview = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <BlogsContext.Provider value={slug}>
      <Fullpage />
    </BlogsContext.Provider>
  );
};

export default Interview;
export { BlogsContext };
