// * DEPENDS
import React, { useState } from "react";
import CaptionCaro, { CaptionItem } from "./AboutUsCaro";
// import { Link } from 'react-router-dom';

// * CSS
import "../../CSS/Pages_home/AboutUs.css";

const AboutUs = () => {
  const [showCopy, setShowCopy] = useState(false);
  const [rotateAmount, setRotateAmount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // ! please update the count if the amount of slides changes
  const captionCount = 3;
  // ! 1-indexed count

  // ! This will also need to be updated so that it can be used to change the button titles
  const titles = ["Our Commitment", "Our Team", "Est. 1998"];

  // used to update the position of the arrow icon
  const rotateIcon = () => {
    if (rotateAmount === 0) {
      setRotateAmount(90);
    } else if (rotateAmount === 90) {
      setRotateAmount(0);
    }

    if (showCopy === true) {
      // console.log("before:", showCopy)
      setShowCopy(false);
      // console.log("after", showCopy)
    } else if (showCopy === false) {
      setShowCopy(true);
    }

    reveal();
    return rotateAmount;
  };

  // used to update the position of the caption slider
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = captionCount - 1;
    } else if (newIndex >= captionCount) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  // used to reveal the copy container
  const reveal = () => {
    // check current state
    if (showCopy === false) {
      return "0vh";
    } else if (showCopy === true) {
      return "90vh";
    }
  };

  // const handleScroll = () => {
  //     reveal();
  //     rotateIcon();
  //     return 1;
  // }

  // used to generate button titles
  const nameLeftButton = (activeIndex) => {
    if (activeIndex === 0) {
      return `${titles[titles.length - 1]}`;
    } else {
      return titles[activeIndex - 1];
    }
  };

  const nameRightButton = (activeIndex) => {
    if (activeIndex === titles.length - 1) {
      return `${titles[0]}`;
    } else {
      return titles[activeIndex + 1];
    }
  };

  return (
    <div className="AboutUs">
      <div
        className="AboutUs__headerContainer"
        onClick={() => {
          rotateIcon();
        }}
      >
        <span
          className="headerContainer__icon"
          style={{
            transform: `rotate(${rotateAmount}deg)`,
            transformOrigin: "center",
          }}
        >
          &#9658;
        </span>
        <h1 id="header__AboutUs" className="headerContainer__header">
          About Us
        </h1>
      </div>

      <div className="AboutUs__copyContainer" style={{ height: `${reveal()}`, overflow: "hidden" }}>
        <CaptionCaro className="CaptionCaro" activeIndex={activeIndex}>
          <CaptionItem key="CaptionCaro_1" className="CaptionItem">
            <div className="CaptionItem__container">
              <h3 className="CaptionItem__header">
                Our <span className="titleColor">Commitment</span>
              </h3>
              <p className="CaptionItem__subheader">
                kind professionals, at your service.
              </p>
              <p className="CaptionItem__body">
                Our goal is to match clients with AV systems and tools that prepare them for success; 
                always at a fair price, packaged together with unbeatable service after installation. 
              </p>
              <p className="CaptionItem__body">
                We understand that simplicity is best, and aim to deliver systems that meet each customer's unique needs. Our success is measured by the smiles we make, 
                not products pushed out the door. 
              </p>
              <p className="CaptionItem__body">
                $100 or $100,000, our objective is to exceed service expectations at every part of the project all the same.
              </p>
            </div>
          </CaptionItem>
          <CaptionItem key="CaptionCaro_3" className="CaptionItem">
            <div className="CaptionItem__container">
              <h3 className="CaptionItem__header">
                Our <span className="titleColor">Team</span>
              </h3>
              <p className="CaptionItem__subheader">
                experienced professionals you can trust.
              </p>
              <p className="CaptionItem__body">
                Learning and building on two decades of technology trends, our team has a combined 100+ years of experience and countless certifications. 
                No problem or project is out of reach. 
              </p>
              <p className="CaptionItem__body">
                After completing installation, we provide vendor-class
                calibration for audio and video displays to put your products at
                peak performance. Additionally, you can expect hand-on guidance
                from on-site technicians to learn how to operate your new
                system.
              </p>
              {/* ! space to hold additional content */}
            </div>
          </CaptionItem>
          <CaptionItem key="CaptionCaro_2" className="CaptionItem">
            <div className="CaptionItem__container">
              <h3 className="CaptionItem__header">
                Established <span className="titleColor">since 1998</span>
              </h3>
              <p className="CaptionItem__subheader">
                we've learned a lot in 20 years.
              </p>
              <p className="CaptionItem__body">
                Like all the greats, Audio Contractors was started in a garage in 1998 by sole owner and founder, John Deem. 
                Today, Audio Contractors has grown to be the longest-standing, singularly owned AV company in southern Wisconsin. 
              </p>
              <p className="CaptionItem__body">
              We've spent these years forming lifelong customer relationships, one customer at a time. While the list constantly grows,
              we have never lost site of what matters most: carefully matching products and services that suit each client's unique needs. 
              </p>
            </div>
          </CaptionItem>
        </CaptionCaro>

        <div className="AboutUs__controlContainer">
          <div
            id="control__HPAboutUs_left"
            className="copyContainer__controller"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            {/* <hr id="ctrlElem__HPAboutUs_left" className='controller__ruleLine' /> */}
            <span id="label__HPAboutUs_left" className="controller__label">
              {nameLeftButton(activeIndex)}
            </span>
          </div>

          <div
            id="control__HPAboutUs_right"
            className="copyContainer__controller"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            {/* <hr id="ctrlElem__HPAboutUs_right" className='controller__ruleLine' /> */}
            <span id="label__HPAboutUs_right" className="controller__label">
              {nameRightButton(activeIndex)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

// This file is a bit of a mess in order to get everything working properly, but there are few things going on:
//     1. there is a function that is controlling the slider, that is constructed (mostly) in the AboutUsCaro.css and AboutUsCaro.js files
//     this is controlled with the state amount telling the style property to move from place to place.
//     it runs on a loop based on the array or children and the count at the top of this file.

//     2. there is another list of titles that are used to name the buttons. the functions just look at the next and previous titles in the list
//     and place them there. make sure to update both the title and the list of titles in order for things to work properly.

//     3. as if this thing wasn't bad enough, there is TWO functions controlling the reveal of the copy section:
//          1. there is a function that determines the rotation of the icon based on a 0 or 90 value passed to the CSS
//          2. that function, at the end, calls another function that determines the state of the copy container being shown and
//          changes the "height" value based on this; between 0px or 100% with "overflow: hidden" on both of them.
