import React, { createContext } from "react";
import { useRouter } from "next/router";
import Fullpage from "../../../components/Interview/InterviewDetails/InterviewDetails";

const BloggerContext = createContext();

const Interview = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <BloggerContext.Provider value={slug}>
      <Fullpage />
    </BloggerContext.Provider>
  );
};

export default Interview;
export {BloggerContext}
