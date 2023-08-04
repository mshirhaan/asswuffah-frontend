import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import Library from "./components/Library/Library";
import LatestEvents from "./components/Events/LatestEvents";
import EventAlbum from "./components/Events/EventAlbum";
import Footer from "./components/Footer/Footer";
import Backdrop from "./components/Layout/Backdrop/Backdrop";

function App() {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const showBackDropHandler = (show: boolean) => {
    setShowBackdrop(show);
  };
  return (
    <>
      {showBackdrop ? <Backdrop setShowBackdrop={showBackDropHandler} /> : null}
      <Header showBackdrop={showBackdrop} setShowBackdrop={showBackDropHandler} />
      <Hero />
      <Courses />
      <Library />
      <LatestEvents />
      <EventAlbum />
      <Footer />
    </>
  );
}

export default App;
