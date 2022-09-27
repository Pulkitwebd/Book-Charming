import React, { createContext } from "react";
import { useRouter } from "next/router";
import Fullpage from "../../../components/Interview/InterviewDetails/InterviewDetails";

const AuthorContext = createContext();

const Interview = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <AuthorContext.Provider value={slug}>
      <Fullpage />
    </AuthorContext.Provider>
  );
};

export default Interview;
export {AuthorContext}
