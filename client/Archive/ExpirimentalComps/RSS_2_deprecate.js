import React, {useState, useEffect} from "react";

const RSS_2 = () => {
    // const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // const getFeed = () => {
        //     var injectionPoint,container,doc=document,script="script";
        //     injectionPoint = doc.createElement("script");
        //     injectionPoint.async=1;
        //     injectionPoint.charset="UTF-8"
        //     injectionPoint.src="https://cdn.curator.io/published/d8b79a43-f598-4922-a13b-5e7d7fc4c637.js"
        //     container = doc.getElementsByTagName(script)[0];
        //     container.parentNode.insertBefore(injectionPoint,container)
        //     console.log(container)
        //     setIsLoaded(true);
        //     return container
        // }
        // getFeed();
    },[]);


    return(
        <div className="RSS_2">
            <div id="socialfeed"><a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a></div>
            <script type="text/javascript">
                {
                    function(){
                        var i=null;
                        var e=null;
                        var d=document
                        var s="script";
                        i=d.createElement("script");
                        i.async=1;
                        i.charset="UTF-8";
                        i.src="https://cdn.curator.io/published/d8b79a43-f598-4922-a13b-5e7d7fc4c637.js";
                        e=d.getElementsByTagName(s)[0];
                        e.parentNode.insertBefore(i, e);
                }}();
            </script>
            <div></div>
        </div>
    );
};

