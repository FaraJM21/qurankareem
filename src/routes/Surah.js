// import axios from "axios";
import React, {  useState } from "react";
import { useLocation } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";



function Surah() {
  let number = useLocation();


  const [surahs, setSurahs] = useState(number.state);
  
  const [ayahs, setAyahs] = useState(
    number.state.ayahs.map((item) => item.audio)
  );



  const [isPlay, setIsplay] = useState(false);
  const [num, setNum] = useState(6);



  const playing = (e) => {
     
     setTimeout(() => {

      if (num + 1 === ayahs.length) {
        document.getElementById("player").pause();
     
      }
      
      else {
        console.log(`============='kirdi=========`);
        setNum(num + 1);
       
      }
    }, e.target.duration * 1000);
    
   
       
  };

 
  



  const play = (inx) => {
    setIsplay(true);
    setNum(inx);
    document.getElementById("player").play();
    document.getElementById("player").autoplay = true;
  
  };

  const pause = () => {
    setIsplay(false);
    document.getElementById("player").pause();
    document.getElementById("player").autoplay = false; 

   
  };

  return (
    <div className="surah">
      <div className="list">
        {surahs ? (
          <>
            <ReactAudioPlayer
              src={ayahs[num]}
              controls
              loop
              id="player"
              onPlay = {playing}
              // onPause = {stop}
           
            />

            {surahs.ayahs.map((item, index) => {
              return (
                <div className={`cards  ${index}`} key={item.number}>
                  <div className="inner">
                    <div className="number">
                      <p>{surahs.number}</p>
                      <span>:</span>
                      <p>{item.numberInSurah}</p>
                    </div>
                    <div className="player">
                      <i>
                        {" "}
                        {isPlay && num === index ? (
                          <BsPauseFill onClick={pause} />
                        ) : (
                          <BsFillPlayFill onClick={() => play(index)} />
                        )}
                      </i>
                    </div>

                    <span>{item.sajda.toString()}</span>
                  </div>
                  <div className="title">
                    <h3>{item.text}</h3>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          "Assalamu Alekum choose one of Surahs"
        )}
      </div>
    </div>
  );
}

export default Surah;

// surahs.ayahs.map((item, index) => {
//  return (
//    <>
//      <div className={`cards  ${index}`} key={item.number}>
//        <div className="inner">
//          <div className="number">
//            <p>{item.number}</p>
//            <span>:</span>
//            <p>{item.numberInSurah}</p>
//          </div>
//          <div className="player">
//            <i> {play ? <BsPauseFill /> : <BsFillPlayFill />}</i>
//          </div>
//          <span>{item.sajda.toString()}</span>
//        </div
//        <div className="title">
//          <h3>{item.text}</h3>
//        </div>
//      </div>
//    </>
//  );
//  }
