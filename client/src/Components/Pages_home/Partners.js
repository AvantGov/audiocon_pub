// * DEPENDS.
import React, { useState } from "react";

// * CSS
import "../../CSS/Pages_home/Partners.css";

const Partners = () => {
  const [activeVid, setActiveVid] = useState({
    currentVideo: 1,
    embed: "q8GV7dTVsEU",
    overlayAmount: 0,
    title: "Control4",
  });

  const videoList = [
    {
      currentVideo: 1,
      embed: "q8GV7dTVsEU",
      translateAmount: 0,
      title: "Control4",
    },
    {
      currentVideo: 2,
      embed: "MVxXqWTBjWA",
      translateAmount: 0,
      title: "Q-SYS",
    },
    {
      currentVideo: 3,
      embed: "pG9l4oTjN5Y",
      translateAmount: 0,
      title: "Danley",
    },
  ];

  const handleSelection = (num) => {
    setActiveVid(videoList[num]);
    console.log("update active video:", activeVid);
    return null;
  };

  return (
    <div className="Partners">
      <div className="Partners__titleContainer">
        <h3 className="titleContainer__header" id="Partners_header">Brand Partners</h3>
        <p className="titleContainer__subheader" id="Partners_subheader">
            Check out curated content from our brand partners: 
        </p>
      </div>

      <div className="Partners__viewingContainer">
        
        
        <div className="viewingContainer__videoList">
          <div id="pvideo_drain" className="videoList__listItem" onClick={() => {handleSelection(0);}}>
                <p className="listItem__title">{videoList[0].title}</p>
                <hr className="listItem__divider" />
          </div>
          <div id="pvideo_ela" className="videoList__listItem" onClick={() => {handleSelection(1);}}>
                <p className="listItem__title">{videoList[1].title}</p>
                <hr className="listItem__divider" />
          </div>
          <div id="pvideo_tmc"className="videoList__listItem"onClick={() => {handleSelection(2);}}>
                <p className="listItem__title">{videoList[2].title}</p>
                <hr className="listItem__divider" />
          </div>
        </div>

        <hr className="viewingContainer__divider" />

        <div className="viewingContainer__video">
          <iframe
            className="video__iframe"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${activeVid.embed}`}
            title="Brand Partner Video"
            frameBorder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
