import axios from "axios";
import React, { useEffect, useState } from "react";
import Surahs from "../components/Surahs";

function Home() {
  const [surahs, setSurahs] = useState([]);
 
  useEffect(() => {
    axios
      .get(`http://api.alquran.cloud/v1/quran/ar.alafasy`)
      .then((response) => setSurahs(response.data.data.surahs));
  }, []);
  
   console.log(surahs);
  
  return (
    <div className="home">
      <div className="mainImg">
        <div className="images">
          <img alt="404" src="https://quran.kemenag.go.id/images/home.png" />
          <br />
          <img
            alt="404"
            src="https://quran.kemenag.go.id/images/img015__1.png"
          />
          <br />
          <img
            alt="404"
            src="https://quran.kemenag.go.id/images/img015__2.png"
          />
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
