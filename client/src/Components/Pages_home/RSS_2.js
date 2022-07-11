// DEPENDS.
import React, {useEffect} from 'react';

// CSS 
import "../../CSS/Pages_home/RSS.css";


const RSS = () => {
    useEffect(() => {
        const script = document.createElement('script');
        const RSS_container = document.getElementById('f8211876_1651779451')

        script.src = "https://www.powr.io/powr.js?platform=react";
        script.async = true;

        RSS_container.appendChild(script)
    }, [])

    return (
        <div className="RSS" id="RSS_comp">
            <div class="powr-social-feed" id="f8211876_1651779451">
                <h1 className='psf__title'>From our Facebook:</h1>
            </div>
        </div>
    );
};

export default RSS;