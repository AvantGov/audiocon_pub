// this will the component that recieves the props from the .map() function of TestimonialGallery.js and render each as an item on the page 

// DEPENDS
import React from 'react';

// CSS 
import "../../CSS/Pages_Testimonials/Testimonial.css"

const Testimonial = (props) => {

    return(
        <div className='Testimonial'>
            Hello i like this company
        </div>
    )
};

export default Testimonial;
