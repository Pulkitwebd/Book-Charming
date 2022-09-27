import React, { createContext } from "react";
import { useRouter } from "next/router";
import Fullpage from "../../components/BookTour/BookTourDetails/BookTourDetails";

const BookTourContext = createContext();

const Interview = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <BookTourContext.Provider value={slug}>
      <Fullpage />
    </BookTourContext.Provider>
  );
};

export default Interview;
export {BookTourContext}
