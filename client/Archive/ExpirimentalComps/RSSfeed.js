// * DEPENDS.
import react from 'react';
import {useState, useEffect} from 'react';


// * CSS
import '../CSS/RSSfeed.css';

const RSSfeed = () => {
    useEffect(()=> {})
    return(
        <div className="RSSfeed">I am the RSSfeed</div>
    );
};

export default RSSfeed;


// ? some usable code that this comp will be based off of 
// import React, { useState } from "react";
// export default function App() {
//   const [rssUrl, setRssUrl] = useState("");
//   const [items, setItems] = useState([]);
//   const getRss = async (e) => {
//     e.preventDefault();
//     const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
//     if (!urlRegex.test(rssUrl)) {
//       return;
//     }
//     const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
//     const { contents } = await res.json();
//     const feed = new window.DOMParser().parseFromString(contents, "text/xml");
//     const items = feed.querySelectorAll("item");
//     const feedItems = [...items].map((el) => ({
//       link: el.querySelector("link").innerHTML,
//       title: el.querySelector("title").innerHTML,
//       author: el.querySelector("author").innerHTML
//     }));
//     setItems(feedItems);
//   };
//   return (
//     <div className="App">
//       <form onSubmit={getRss}>
//         <div>
//           <label> rss url</label>
//           <br />
//           <input onChange={(e) => setRssUrl(e.target.value)} value={rssUrl} />
//         </div>
//         <input type="submit" />
//       </form>
//       {items.map((item) => {
//         return (
//           <div>
//             <h1>{item.title}</h1>
//             <p>{item.author}</p>
//             <a href={item.link}>{item.link}</a>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


// the comp above is a RSS getter based on the input of a link, but we will need to turn it 
// into a useEffect function that will load the component with a static link. 
