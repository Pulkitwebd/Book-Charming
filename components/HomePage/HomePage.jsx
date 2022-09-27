import React,{useState} from "react";
import Hero from "./Hero/Hero";
import BookReview from "./BookReview"
import Blog from "./Blog";
import data from "./Data/Data"
import SubcribeBox from "./Subscribe/SubcribeBox";
import About from "./About/About";
import Testimonal from "./Testimonial/Testimonal";
import Guestpost from "./GuestPost";
import Bookblitz from "./BookBlitz";
import Interview from "./Interview";
import BookTour from "./BookTour";
import BookCoverReveal from "./BookCoverReveal";
import Services from "./Services/Services";

const HomePage = () => {

  const [bookReview, setBookCoverData] = useState(data);
  const [blog, setBlogData] = useState(data);
  const [interview, setInterviewData] = useState(data);
  const [guestpost, setGuestPost] = useState(data);
  const [bookBlitz, setBookBlitz] = useState(data);
  const [bookTour, setBookTour] = useState(data);
  const [bookCoverReveal, setBookCoverReveal] = useState(data);

  return (
    <>
      <Hero />
      <BookReview data={bookReview} />
      <Blog data={blog} />
      <Interview data={interview} />
      <Guestpost data={guestpost} />
      <Bookblitz data={bookBlitz} />
      <BookCoverReveal data={bookCoverReveal} />
      <BookTour data={bookTour} />
      <SubcribeBox />
      <About />
      <Testimonal />
      <Services />
    </>
  );
};

export default HomePage;