import Surahs from "../components/Surahs";
import home from "../assets/home.png";
import img1 from "../assets/img015__1.png";
import img2 from "../assets/img015__2.png";
import { suraharr } from "../db/surahdb";
import { useEffect } from "react";
function Home() {
  const surahs = suraharr;
  // `http://api.alquran.cloud/v1/quran/ar.alafasy`
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="mainImg">
        <div className="images">
          <img alt="404" src={home} />
          <br />
          <img alt="404" src={img1} />
          <br />
          <img alt="404" src={img2} />
        </div>

        <div className="backImg"></div>
      </div>

      <div className="container">
        <h3>List Of Surahs</h3>

        <div className="row g-mb-10 box">
          <Surahs surahs={surahs} />
        </div>
      </div>
    </div>
  );
}

export default Home;
