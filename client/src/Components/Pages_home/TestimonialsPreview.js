// * DEPENDS. 
import React from 'react';

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
                    <p className='quoteContainer__quote'>"I've been a regular customer of Audio Contractors for nearly twenty years. I can honestly say that I've never had a negative experience."</p>
                    <a className='quoteContainer__atr' target="_blank" rel="noreferrer noopener" href="https://g.co/kgs/oyzU8o">Read Review &#9658;</a>
                    {/* https://g.co/kgs/oyzU8o */}
                </div>
                <div className='copyContainer__quoteContainer'>
                    <p className='quoteContainer__quote'>"[They] had me practice accessing all 4 devices to make sure I understood how to get to each ones, and what settings needed to change to get there."</p>
                    <a className='quoteContainer__atr' target="_blank" rel="noreferrer noopener" href="https://g.co/kgs/7n1Mko">Read Review &#9658;</a>
                    {/* https://g.co/kgs/7n1Mko */}
                </div>
                <div className='copyContainer__quoteContainer'>
                    <p className='quoteContainer__quote'>" I would not look any further than Audio Contractors; they bring the complete package from the design stage, to the installation, to the customer service."</p>
                    <a className='quoteContainer__atr' target="_blank" rel="noreferrer noopener" href="https://g.co/kgs/hgMUwG">Read Review &#9658;</a>
                    {/* https://g.co/kgs/hgMUwG */}
                </div>
            </div>
            {/* <Link to="/testimonials"> */}
                <a className='TestimonialsPreview__link' target="_blank" rel='noopener noreferrer' href="https://www.google.com/search?q=audio+contractors&sxsrf=ALiCzsZLrprK8TcmymiBYDpV5CC77cJTeQ%3A1657850192941&source=hp&ei=UMnQYtS2NIyeptQPg8q0sAo&iflsig=AJiK0e8AAAAAYtDXYGy3xXMov225I4ZIYMLMdk798uGm&gs_ssp=eJzj4tZP1zcsScmzNM-wNGC0UjWosLAwMDNJTjRISUyxNLdMtbQyqEgySDU0STExM05KMTY1sTD0EkwsTcnMV0jOzyspSkwuyS8qBgDJIxVS&oq=audio+contrac&gs_lcp=Cgdnd3Mtd2l6EAMYAzIECCMQJzIECCMQJzIECCMQJzIQCC4QgAQQhwIQxwEQrwEQFDIICAAQgAQQyQMyBQgAEIAEMgUIABCABDIGCAAQHhAWMggIABAeEA8QFjIGCAAQHhAWOgsILhDHARCvARCRAjoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOgsILhCABBDHARDRAzoICC4QgAQQsQM6DgguEIAEELEDEMcBENEDOggIABCABBCxAzoHCCMQyQMQJzoLCC4QgAQQxwEQrwE6CggAEIAEEIcCEBQ6BQguEIAEOgsILhCABBCxAxCDAToOCC4QgAQQxwEQrwEQ1AI6DgguEIAEELEDEMcBEK8BOgUIABCGA1AAWKAIYI4SaABwAHgAgAGdAYgB-wySAQQwLjEzmAEAoAEB&sclient=gws-wiz#lrd=0x88064ca0dad979e9:0xb0e14d463bd35481,1,,,">
                    {/* <p className='link__hidden'>Read more reviews</p> */}
                    <p className='link__lable' id="testimonials_link">Read Our Reviews  &#9658;</p>
                </a>
            {/* </Link> */}
        </div>
    );
};

export default TestimonialsPreview;
