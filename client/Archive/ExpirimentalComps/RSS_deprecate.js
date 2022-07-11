// * DEPENDS. 
import React, {useState} from 'react';

// * CSS 
import "../CSS/RSS.css";

const RSS = () => {
    const [rssUrl, setRssUrl] = useState("");
    const [items,setItems] = useState([]);

    // ensure that the URL is a valid string 
    const getRss = async (e) => {
        e.preventDefault();
        const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
        if (!urlRegex.text(rssUrl)) {
            return;
        } // * else if ... 
        
        // make the req
        const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
        
        // deconstruct the request fore contents specifically  
        const { contents } = await res.json();

        // parsing the XML from the response contents data
        const feed_XML = new window.DOMParser().parseFromString(contents,"text/xml");
        
        // node that holds the XML content on the tree, then turning the node list into an arr 
        const nodes = feed_XML.querySelectorAll("item");
        const feedArr = [...nodes].map((node) => ({
            link: node.querySelector("link").innerHTML,
            title: node.querySelector("title").innerHTML,
            author: node.querySelector("author").innerHTML
        }));
        
        console.log("RSS feed state:", feedArr)
        setItems(feedArr);
    };

    return (
        <div className="RSS">
            <div className="RSS__titleContainer">
        
            </div>
            <div className="RSS__feed">
                <form className="feed__form" onSumbit={getRss}>
                    <div className="form__container">
                        <label> rss url </label>
                        <br />
                        <input onChange={(e) => {setRssUrl(e.target.value)}} value={rssUrl} />
                    </div>
                    <input type="submit" />
                    <form className="feed__form">
                        {items.map((item) => {
                            return(
                                <div>
                                    <a href={item.link}>{item.link}</a>
                                    <p>{item.title}</p>
                                    <p>{item.author}</p>
                                </div>
                            )
                        })}
                    </form>
                </form>
            </div>
        </div>
    )
};

export default RSS;