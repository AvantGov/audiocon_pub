// * DEPENDS. 
import React from 'react';

// * CSS
import "../../CSS/Pages_services/ResidentialServices.css"

// * COMPS
import ServiceBanner from './ServiceBanner';


const ResidentialServices = () => {

    return (
        <div className='ResidentialServices'>
            <ServiceBanner />
            <div className='ResidentialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="hometheater_title" className='titleContainer__title'>Home Theater</h1>
                    {/* <p id="hometheater_subtitle" className='titleContainer__subtitle'>A <strong className="title__strong">custom home theater</strong> is more affordable than you may think!</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="hometheater_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}

                    <div className='contentContainer__copyContainer'>
                        <h3 id="hometheater_smallTitle" className='copyContainer__title'>A <strong className="title__strong">World-Class Theater</strong>, in your home!</h3>
                        <p id="hometheater_bullet1" className='copyContainer__bullet'><span>&#8226;</span> Our clients outshine the local cinema with our award-winning home theater installations. We are making luxury a simple reality through integrated AV systems that dazzle and immerse.</p>
                        <p id="hometheater_bullet2" className='copyContainer__bullet'><span>&#8226;</span> Our team's goal is to deliver high performance sound & precise acoustic treatment, coupled with modern display options that captivate a comfy audience. Don't forget, our team supplies top-notch theater furniture as well!</p>
                        <p id="hometheater_bullet3" className='copyContainer__bullet'><span>&#8226;</span> Whether bringing the family together on movie night, or becoming the envy of the neighborhood; Audio Contractors LLC. is a one-stop-shop for high-class home theater.</p>
                    </div>
                </div>
            </div>
            <div className='ResidentialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="wholehouse_title" className='titleContainer__title'>Whole-Home Distributed Audio</h1>
                    {/* <p id="wholehouse_subtitle" className='titleContainer__subtitle'>A <strong className="title__strong">custom home theater</strong> is more affordable than you may think!</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="wholehouse_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}
                    <div className='contentContainer__copyContainer'>
                        <h3 id="wholehouse_smallTitle" className='copyContainer__title'>Find the sound to suit <strong className="title__strong">every room.</strong></h3>
                        <p id="wholehouse_bullet1" className='copyContainer__bullet'><span>&#8226;</span> Enjoy having music and video everywhere with easy to operate distributed audio/video throughout the home. Hear every note, without a speaker in sight. Our architectural speakers organically blend into the style of any home.</p>
                        <p id="wholehouse_bullet2" className='copyContainer__bullet'><span>&#8226;</span> Modern homes call for intuitive speakers systems that deliver crystal clear sound to high traffic areas, while also capable of crafting soft, lush atmosphere for the moments that matter. Our team thoroughly understands the dual-nature of these systems and is eager to find a solution with perfect-fit.</p>
                        <p id="wholehouse_bullet3" className='copyContainer__bullet'><span>&#8226;</span> Our technicians understand that the client experience is key to any successful installation. Expect tailored consultation and orientation upon installation along with personalized controller setup. Easily control an entire system from a smartphone, tablet, computer, smart tv ... and much more.</p>
                        <p id="wholehouse_bullet4" className='copyContainer__bullet'><span>&#8226;</span> From portable networked smart speakers to fully-integrated audio systems in every room of the house; Audio Contractors is here to help with each step from day 1 to beyond.</p>
                    </div>
                </div>
            </div>
            <div className='ResidentialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="automation_title" className='titleContainer__title'>Automation Control</h1>
                    {/* <p id="automation_subtitle" className='titleContainer__subtitle'>A <strong className="title__strong">custom home theater</strong> is more affordable than you may think!</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="automation_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}

                    <div className='contentContainer__copyContainer'>
                        <h3 id="automation_smallTitle" className='copyContainer__title'><strong className="title__strong">Control your kingdom</strong> with every device; <br/> from anywhere in the home.</h3>
                        <p id="automation_bullet1" className='copyContainer__bullet'><span>&#8226;</span> Imagine harnessing the entire home system through the portable screen of a smartphone, tablet, or computer. Actualize perfect harmony between AV systems, intelligent lighting, climate control, and motorized window shading with a single command. Also available with remote access, our clients rest assured their safe haven is always within reach.</p>
                        <p id="automation_bullet2" className='copyContainer__bullet'><span>&#8226;</span> No more waiting on "made it home" texts, automation control systems can send auto alerts upon arrival and departure. Lock the door, open the garage, turn on the lights ... it's all possible with the multi-faceted product offerings from Audio Contractors LLC.</p>
                        <p id="automation_bullet3" className='copyContainer__bullet'><span>&#8226;</span> Schedule once and carry on with individualized programming and automation routine scheduling designed around daily routines. Our system engineers work hard to expand the possibilities of integrated components with modern controller technology.</p>
                        <p id="automation_bullet3" className='copyContainer__bullet'><span>&#8226;</span> Sharing a movie with the family just got easier with whole-home automation handling all the footwork. Pushing “Play” from a Control 4 remote: dims the lights, lowers the shades, turns on the speakers, starts the projector, and starts the movie. Now put the remote down, the feature film is starting.</p>
                    </div>
                </div>
            </div>
            <div className='ResidentialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="smartlighting_title" className='titleContainer__title'>Smart Lighting</h1>
                    {/* <p id="smartlighting_subtitle" className='titleContainer__subtitle'>A <strong className="title__strong">custom home theater</strong> is more affordable than you may think!</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="smartlighting_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}

                    <div className='contentContainer__copyContainer'>
                        <h3 id="smartlighting_smallTitle" className='copyContainer__title'><strong className="title__strong">No compromises;</strong> save on bills & set the perfect mood lighting.</h3>
                        <p id="smartlighting_bullet1" className='copyContainer__bullet'><span>&#8226;</span> With consumer lighting control blossoming in demand, the tedious task of set up and configuration for multiple lighting fixtures is often overlooked. From simple upgrades to complex centralized system rehabs, Audio Contractors is here to deliver a range of high-quality single-system lighting controls that bring peace of mind.</p>
                        <p id="smartlighting_bullet2" className='copyContainer__bullet'><span>&#8226;</span> Pack it in for the evening and say 'goodnight' to the entire home with a single button press. Dim each indoor light gradually, and start the timer for the outdoor lights.</p>
                        <p id="smartlighting_bullet3" className='copyContainer__bullet'><span>&#8226;</span> After that restful 8 hours, wake up naturally and greet the day with daytime lighting alarms and shade control. Our experts work hard to understand any client's daily routine, and deliver automation control that compliments & supports daily living. No more room-to-room hustle to light up the house each morning.</p>
                        <p id="smartlighting_bullet4" className='copyContainer__bullet'><span>&#8226;</span> Smart Lighting opens the door to green living by helping manage power usage. Allowing for significant reduction in energy consumption without compromising any part of the daily routine.</p>
                    </div>
                </div>
            </div>
            <div className='ResidentialServices__service'>
                <div className='service__titleContainer'>
                    <h1 id="networking_title" className='titleContainer__title'>Structured Wiring & Home Networking</h1>
                    {/* <p id="networking_subtitle" className='titleContainer__subtitle'>A <strong className="title__strong">custom home theater</strong> is more affordable than you may think!</p> */}
                </div>
                <div className='service__contentContainer'>
                    <div id="networking_image" className='contentContainer__image'></div>
                    {/* <hr className='contentContainer__rule'></hr> */}

                    <div className='contentContainer__copyContainer'>
                        <h3 id="networking_smallTitle" className='copyContainer__title'>Networking for the <strong className="title__strong">modern home</strong></h3>
                        <p id="networking_bullet1" className='copyContainer__bullet'><span>&#8226;</span> After so much talk about what's possible, it's vital to remember what is at the core of all of this convenience: dependable home networking. Like a human nervous system, integrated home systems utilize physical wiring and Wi-Fi connection (the "nerves") to communicate commands to all parts of the system, effectively and reliably.</p>
                        <p id="networking_bullet2" className='copyContainer__bullet'><span>&#8226;</span> Store bought and ISP-supplied routers simply cannot keep up, as automation technology has quickly outpaced these consumer-grade installations. Our team works with top-of-the-line companies to deliver convenient and powerful solutions that reward our clients with a first-class internet experience while handling the demands of any home automation system.</p>
                        <p id="networking_bullet3" className='copyContainer__bullet'><span>&#8226;</span> New construction project? Book some time to speak with one of our experts and collaboratively plan wiring protocols that deliver connection where it's needed most in the home. We create structured wiring solutions suited for modern entertainment options throughout the home.</p>
                        <p id="networking_bullet3" className='copyContainer__bullet'><span>&#8226;</span> Skip the confusion and annoying hold music that comes with massive ISP call-center chaos, our support technicians are ready to help you troubleshoot remotely and roll out on-site support for major issues. Another priceless benefit of pairing your home internet with products from Audio Contractors LLC.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResidentialServices;