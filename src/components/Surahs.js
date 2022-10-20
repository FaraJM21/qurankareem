import React from "react";
import { useNavigate } from "react-router-dom";
function Surahs(props) {
  let navigate = useNavigate();

  
  return (
    <>
      {props.surahs.map((surah, index) => {
        return (
          <div key={index} className="col-lg-4">
            <ul className="list-unstyled mb-0">
              <li>
                <div className="link" onClick={()=>navigate('/surah', {state:index})}>
                  <span className=" surahNum template1">{surah.number}</span>
                  <div className="cardContent">
                    <h4 className="template1">
                      {surah.englishName}({surah.ayahs.length})
                    </h4>
                    <h6 className="template1">
                      {surah.englishNameTranslation}
                    </h6>
                  </div>
                  <div className="arabicName">{surah.name}</div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Surahs;
