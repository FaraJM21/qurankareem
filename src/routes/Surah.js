import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

function Surah() {
  let number = useLocation();
  const [surah, setSurah] = useState([]);
  // const [audio, setAudio] = useState(0);

  useEffect(() => {
    axios
      .get(`http://api.alquran.cloud/v1/quran/ar.alafasy`)
      .then((response) => setSurah(response.data.data.surahs[number.state]));
  }, [number.state]);

  
  const handleClick = (item, index) => {
    document.getElementById(`player ${index}`).play();
    let b = document.getElementById(`player ${index}`).duration;
    const newArr = surah.ayahs.map((items) => {
      if (items.number === item.number) {
        items.sajda = true;
      }
      return items;
    });

    
    setSurah({ ...surah, ayahs: newArr });

    setTimeout(() => {
      const newArr = surah.ayahs.map((items) => {
        if (items.number === item.number) {
          items.sajda = true;
        }
        return items;
      });

      setSurah({ ...surah, ayahs: newArr });
    }, b * 1000);

  
  };

  const stop = (item, index) => {
    const newArr = surah.ayahs.map((items) => {
      if (items.number === item.number) {
        items.sajda = !items.sajda;
      }
      return items;
    });
    setSurah({ ...surah, ayahs: newArr });

    document.getElementById(`player ${index}`).pause();
  };

  return (
    <div className="surah">
      <div className="list">
        {number.state !== null ? (
          surah.length !== 0 ? (
            surah.ayahs.map((item, index) => {
              return (
                <>
                  <div className={`cards  ${index}`} key={index}>
                    <div className="inner">
                      <div className="number">
                        <p>{surah.number}</p>
                        <span>:</span>
                        <p>{item.numberInSurah}</p>
                      </div>
                      <div className="player">
                        <i>
                          {" "}
                          {item.sajda ? (
                            <BsPauseFill onClick={() => stop(item, index)} />
                          ) : (
                            <BsFillPlayFill
                              onClick={() => handleClick(item, index)}
                            />
                          )}
                          <ReactAudioPlayer
                            src={item.audio}
                            id={`player ${index}`}
                          />
                        </i>
                      </div>
                      <span>{item.sajda.toString()}</span>
                    </div>

                    <div className="title">
                      <h3>{item.text}</h3>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div>"adasd"</div>
          )
        ) : (
          "Assalomu Alaykum choose one of surahs"
        )}
      </div>
    </div>
  );
}

export default Surah;
