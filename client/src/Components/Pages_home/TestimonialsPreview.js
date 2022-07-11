// * DEPENDS. 
import React from 'react';
import {Link} from 'react-router-dom';

// * CSS 
import "../../CSS/Pages_home/TestimonialsPreview.css";

const TestimonialsPreview = () => {


    return (
        <div className='TestimonialsPreview'>\
            <div className='TestimonialsPreview__headerContainer'>
                <h1 className='headerContainer__header' id="TestCont_header">Everybody talks ...<span>about us</span></h1>
            </div>
            <div className='TestimonialsPreview__copyContainer'>
                <div className='copyContainer__quoteContainer'>
                    <p className='quoteContainer__quote'>"When I think of you and your company, I think of service beyond expectations."</p>
                    <p className='quoteContainer__atr'>Brian S. | Middleton, WI</p>
                </div>
                <div className='copyContainer__quoteContainer'>
                    <p className='quoteContainer__quote'>"We have gotten so used to the 'So-So' attitude on service from retail stores. It is so refreshing to see someone with a great work attitude and customer focus."</p>
                    <p className='quoteContainer__atr'>Don W. | Madison, WI</p>
                </div>
                <div className='copyContainer__quoteContainer'>
                    <p className='quoteContainer__quote'>"The quality of the components chosen has made the experience unbelievable. The quality of the installation far exceeded my expectations."</p>
                    <p className='quoteContainer__atr'>Richard | Greenbay, WI</p>
                </div>
            </div>
            <Link to="/testimonials" className='TestimonialsPreview__link'>
                <div>
                    {/* <p className='link__hidden'>Read more reviews</p> */}
                    <p className='link__lable' id="testimonials_link">View More  &#9658;</p>
                </div>
            </Link>
        </div>
    );
};

export default TestimonialsPreview;
