
// * DEPENDS. 
import React from 'react';

// * CSS
import "../../CSS/Pages_services/CommercialServices.css"

// * COMPS
import ServiceBanner from './ServiceBanner';


const CommercialServices = () => {

    return (
        <div className='CommercialServices'>
            <ServiceBanner />
            <div className='CommercialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="restaurants_title" className='titleContainer__title'>Restaurants & Sports Bars</h1>
                    {/* <p className='titleContainer__subtitle'>hello hello hello helllo helloo helloo hleooo heloo</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="restaurants_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}
                    <div className='contentContainer__copyContainer'>
                        <h3 className='copyContainer__title'><strong className="title__strong">Immersive</strong> displays that fit & fill any room</h3>
                        <p id="restaraunts_bullet1" className='copyContainer__bullet'>&#8226; Immersive audio visual solutions that wow first time visitors, backed with detailed audio clarity that keeps locals coming back every game day. Audio Contractors is here to supply pinnacle sound quality, with budget and utility in mind.</p>
                        <p id="restaraunts_bullet2" className='copyContainer__bullet'>&#8226; With the power of multi-source video matrixing, easily display multiple sports channels across screens to ensure customers never miss a single play. We offer a wide selection of award-winning displays and high-definition video walls.</p>
                        <p id="restaraunts_bullet3" className='copyContainer__bullet'>&#8226; Our team has worked with an expansive portfolio of clients in the Southern Wisconsin area, and are always looking for our next success story. <a href="mailto:info@audiocontractorsllc.com" id="comm_mailto">Drop us a line</a> if upgrading to high performance AV would help your business grow.</p>
                    </div>
                </div>
            </div>
            <div className='CommercialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="conference_title" className='titleContainer__title'>Conference Rooms</h1>
                    {/* <p className='titleContainer__subtitle'>hello hello hello helllo helloo helloo hleooo heloo</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="conference_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}
                    <div className='contentContainer__copyContainer'>
                        <h3 className='copyContainer__title'><strong className="title__strong">Simplicity</strong> at the core of the conference</h3>
                        <p id="conference_bullet3" className='copyContainer__bullet'>&#8226; Businesses have adapted to online conferencing tools and their operations now rely on nothing short of the best. High definition audio and video raise the bottom line and get more done. Our clients operate their businesses at rapid pace, and benefit from our systems simplifying a large conference to feel just like answering the phone.</p>
                        <p id="conference_bullet1" className='copyContainer__bullet'>&#8226; We have delivered effective conferencing and lecture tools to teachers, students, and professionals across industries. By building each client's user interface meticulously for their needs, we instill confidence for users to understand and operate their systems day-in-and-day-out, regardless of proficiency level.</p>
                        <p id="conference_bullet2" className='copyContainer__bullet'>&#8226; From simple huddle space to complex executive boardrooms, Audio Contractors has the products that help our clients get more work done.</p>
                    </div>
                </div>
            </div>
            <div className='CommercialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="worship_title" className='titleContainer__title'>Houses of Worship</h1>
                    {/* <p className='titleContainer__subtitle'>hello hello hello helllo helloo helloo hleooo heloo</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="worship_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}
                    <div className='contentContainer__copyContainer'>
                        <h3 className='copyContainer__title'>Technology to <strong className="title__strong">lift</strong> your message <strong className="title__strong">higher</strong></h3>
                        <p id="worship_bullet1" className='copyContainer__bullet'>&#8226; Your message is high, let our team find a modern solution that makes it a little clearer. Audio clarity is key, and our systems deliver pristine quality sound in discrete packages. Bring high definition sound to your next worship with a little help from our experts.</p>
                        <p id="worship_bullet2" className='copyContainer__bullet'>&#8226; Meet the needs of the entire congregation with specialized systems like hearing assist to help those experiencing hearing loss, or streaming communication tools to reach those at home and on the road.</p>
                        <p id="worship_bullet3" className='copyContainer__bullet'>&#8226; Echo getting in the way? Liven the main worship hall with acoustic treatment to enhance the environment. Our team works closely with vendors to digitally replicate unique architecture in order to design a tailored solution.</p>
                        <p id="worship_bullet3" className='copyContainer__bullet'>&#8226; From neighborhood congregations, to multi-location worship groups our experts are here to match the right products with budget in mind. </p>
                    </div>
                </div>
            </div>
            <div className='CommercialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="nightlife_title" className='titleContainer__title'>Night Clubs & Event Centers</h1>
                    {/* <p className='titleContainer__subtitle'>hello hello hello helllo helloo helloo hleooo heloo</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="nightlife_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}
                    <div className='contentContainer__copyContainer'>
                        <h3 className='copyContainer__title'>Keep the party <strong className="title__strong">loud,</strong> and the night <strong className="title__strong">never-ending.</strong></h3>
                        <p id="nightlife_bullet1" className='copyContainer__bullet'>&#8226; Audio Contractors makes it possible to wow customers with intense sound and immersive video that will turn any club into the hottest spot in town. Keep the dance floor packed with return clientele that push the party until last call.</p>
                        <p id="nightlife_bullet2" className='copyContainer__bullet'>&#8226; No space limitation can keep our team from maximizing the impact of a venue. Tying in the power of automation allows our clients to control their entire system effectively with ease.</p>
                        <p id="nightlife_bullet3" className='copyContainer__bullet'>&#8226; Complete renovation or minor update, we work carefully with each of our clients to design systems that help businesses grow in meaningful ways. Starting small or diving in head-first, Audio Contractors is here to assist each step of the way.</p>
                        <p id="nightlife_bullet3" className='copyContainer__bullet'>&#8226; Delivering top-notch experiences is a key to success, so why not give customers something to talk about?</p>
                    </div>
                </div>
            </div>
            <div className='CommercialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="apartments_title" className='titleContainer__title'>Apartments & Multiple Dwelling Units</h1>
                    {/* <p className='titleContainer__subtitle'>hello hello hello helllo helloo helloo hleooo heloo</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="apartments_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}
                    <div className='contentContainer__copyContainer'>
                        <h3 className='copyContainer__title'><strong className="title__strong">The highest quality</strong> audio-visual components <br/>for multi-dwelling units.</h3>
                        <p id="apartments_bullet1" className='copyContainer__bullet'>&#8226; Luxury living communities require many complex systems to work together in perfect harmony to deliver high class quality of life. Audio Contractors has built long standing working relationships with many prominent vendors, and are fully prepared to install and maintain a system that  stays in tune.</p>
                        <p id="apartments_bullet2" className='copyContainer__bullet'>&#8226; Condominiums, townhomes, assisted living centers, and gated communities all call for the same synergy: AV wiring design, multi-zone lighting, remote camera security .. the list continues. Our team is ready to advise and future proof your comprehensive investment with systems that bring residents together.</p>
                        <p id="apartments_bullet3" className='copyContainer__bullet'>&#8226; Community clubhouses and fitness facilities are increasing in demand among luxury living residents. Treat community members to something special with immersive AV capabilities that are accessible through a few swipes & taps.</p>
                        <p id="apartments_bullet3" className='copyContainer__bullet'>&#8226; Deliver premium amenities at any investment property with a little help from our team. We're here to make the most out of any room.</p>
                    </div>
                </div>
            </div>
            <div className='CommercialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="retail_title" className='titleContainer__title'>Retail Stores</h1>
                    {/* <p className='titleContainer__subtitle'>hello hello hello helllo helloo helloo hleooo heloo</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="retail_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}
                    <div className='contentContainer__copyContainer'>
                        <h3 className='copyContainer__title'>Own your store's atmosphere with <strong className="title__strong">ease.</strong></h3>
                        <p id="retail_bullet1" className='copyContainer__bullet'>&#8226; Often overlooked, an outstanding AV experience can create the perfect shopping moment. Set a strong rhythm for the day with enhanced store music that keeps employees bright, and customers upbeat while browsing the retail space.</p>
                        <p id="retail_bullet2" className='copyContainer__bullet'>&#8226; Owning the atmosphere has never been easier. Craft a warm embrace of sound for spa goers, or spin the latest underground releases across a record store. Research has shown that music has the ability to retain shoppers and increase sales.</p>
                        <p id="retail_bullet3" className='copyContainer__bullet'>&#8226; Keep customers and employees in sync with digital signage and PA systems that amplify your messaging. Proven to improve productivity and awareness, these products are yet another specialty in our team's repertoire.</p>
                    </div>
                </div>
            </div>
            <div className='CommercialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="reinforcement_title" className='titleContainer__title'>Commercial-Grade Acoustic Treatment</h1>
                    {/* <p className='titleContainer__subtitle'>hello hello hello helllo helloo helloo hleooo heloo</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="reinforcement_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}
                    <div className='contentContainer__copyContainer'>
                        <h3 className='copyContainer__title'>Craft the <strong className="title__strong">perfect space</strong> with custom acoustical solutions.</h3>
                        <p id="reinforcement_bullet1" className='copyContainer__bullet'>&#8226; Modern construction trends often place aesthetics over acoustics, sacrificing audio clarity in critical spaces. Tame the environment by limiting decay and reverberation with commercial grade acoustic reinforcement.</p>
                        <p id="reinforcement_bullet2" className='copyContainer__bullet'>&#8226; Promote communication & collaboration by upping voice intelligibility in the office space. Dial in the perfect amount of hall reverberation for a flawless opening night. This and more are possible with our team's design and installation expertise.</p>
                        <p id="reinforcement_bullet3" className='copyContainer__bullet'>&#8226; Each treatment system is digitally modeled to carefully analyze, design, and test room treatment before installation. Delivering true value through purpose-driven planning.</p>
                    </div>
                </div>
            </div>
            <div className='CommercialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="masking_title" className='titleContainer__title'>Sound Masking & Speech Privacy </h1>
                    {/* <p className='titleContainer__subtitle'>hello hello hello helllo helloo helloo hleooo heloo</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="masking_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}
                    <div className='contentContainer__copyContainer'>
                        <h3 className='copyContainer__title'>Filter and mask distractions <strong className="title__strong">in any space.</strong></h3>
                        <p id="masking_bullet1" className='copyContainer__bullet'>&#8226; Office spaces lacking appropriate boundaries for employees to focus have been related to workplace dissatisfaction and lower productivity. Make open office floor plans a success story with speech privacy support from our trusted vendors.</p>
                        <p id="masking_bullet2" className='copyContainer__bullet'>&#8226; Sound masking, when deployed properly, is an economical solution that improves acoustic comfort, and reduces conversational distractions.</p>
                        <p id="masking_bullet3" className='copyContainer__bullet'>&#8226; Our vendors create masterfully blended solutions that boast the best facets of design & engineering, sourced from a vibrant list of acoustical partners.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommercialServices;