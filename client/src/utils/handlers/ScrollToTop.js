// * DEPENDS
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname])

    return null;
}

// ? this component is used to handle scrolling to the top of the page each time the Router encounters a change of the path. 