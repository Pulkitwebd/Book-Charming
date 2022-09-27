import React, { createContext } from "react";
import { useRouter } from "next/router";
import Fullpage from "../../components/BookCoverReveal/BookCoverDetails/BookCoverDetails";

const BookCoverContext = createContext();

const Interview = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <BookCoverContext.Provider value={slug}>
      <Fullpage />
    </BookCoverContext.Provider>
  );
};

export default Interview;
export {BookCoverContext}
