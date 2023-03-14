import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";
import HPBubbles from "../../components/HPBubbles/HPBubbles";
import MainCircle from "../../components/MainCircle/MainCircle";
import HomePageBubbles from "../../components/HomePageBubbles/HomePageBubbles";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";
import { useState } from "react";

function HomePage() {
  const [page, setPage] = useState(null);
  return (
    <>
     
        <HomePageHeader />
        <MainCircle />
        <HomePageBubbles />
        <HPBubbles />
        <Footer />
      
    </>
  );
}

export default HomePage;
