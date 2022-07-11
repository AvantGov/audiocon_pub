# SPA Component Structure: 


# Services


# Depends. Libraries 
- React Router 
- react-hook-form
- will be using EmailJS to handle the email service for the job application 
- react photoswipe gallery: (https://www.npmjs.com/package/react-photoswipe-gallery)
- react-redux
- reactjs-popup (https://react-popup.elazizi.com/getting-started)


# CSS Themes
Primary Brand Color: #0B72B6
Secondary Brand Color: #80BCD8
Tertiary Brand Color: #1D6187
Brand Setting Color: #EEF8F8
Text Color(s): #000000 , #1D6187 , #FFFFFF, #EEF8F8

Additional Theme Colors: 
#3C3C60
#214EA5
#1E132A
#EAAB73
#EEAECA
rgb(255, 255, 120) | #ffff78

steel color i used in a couple of places: #71797E
green button color: #008000
red error color: #F20000

bullet HTML snippet: &#8226;

Headers: font-family: 'Staatliches', cursive;
Subheaders: font-family: 'Crete Round', serif;
Section Header: font-family: 'Cabin', sans-serif;
Body Copy: font-family: 'Crete Round', serif;
Quote: font-family: 'Signika', sans-serif;
Citation: font-family: 'Press Start 2P', cursive;
Link: font-family: 'Crete Round', serif;

google project ID: cosmic-answer-350614

## Media Break Points Used: 
1600px
1500px
1350px
1150px
600px


# Design Asset Logs 
[ ] will need to make a favicon image to use for the tab header and apple touch logo, thinking that just a simple crop of the "AC" in the logo and then vectorizing it will be the best move. 

[ ] make a banner that has a bunch of the brands cascaded across LTR for the brands button and background transition.  

[ ] what i need more photos of: 

	[x] sound masking (currently: 1) 
		- fiskars, phoenix radiology, bank of broadhead, 

	[x] apartments (currently: 0)
	-- stonehouse + fiduciary 

	[x] clubs (currently: 0)
	-- brats, liberty station, muskalounge, oak park place, antukka properties, inconica

	[x] conference (could use some more actual conference rooms)
-- follow up with ben about andrew jobs/american packaging/heibing, doubletree, dairyland electric, farm n fleet, AVS 
  
	[ ] worship (only have one client so far)
 
	[ x ] retail (don't have much, just the library and fitness center?)
-- reform madison, engleharts, PK fitness, radiance salon, 

	[ x ] theater -- good, just needs some better quality pics
-- peter doggart 
 
	[ ] lighting (currently: 0)
-- doggarts, (well figure more later)

	[ x ] automation (currently: 0, could use some prj screenshots)

	[ x ] networking (currently nothing good)
-- think more about in the future 

	[x] acoustics (currently: 0) (think i am going to move this to commercial) 
	-- art lit lab, wisconsin brewing, heibing, first pres church of oregon, village hall of poynette, aprilaire, dave lens, paul burns, wayne briggs, mkenna (jeremy)


# Fix Log
[ ] Probably do this when doing mobile responsive implementation, but will need to make the photo viewers swipe-able. (there is an article on how to do this in the notion. The one used to make the photo reels.)

[x] figure out how the hell to prevent the compiler from setting up the phone and email addresses incorrectly in chrome browsers 

[ ] will need to stabilize the application forms with redux because currently they are just wiping whenever the page is re-loaded 

[ ] implement a better case of switching the galleryView state from true back to false in order to show the Nav, Footer whenever jumping around pages.
	- currently there is a sweet little hot fix in there where GalleryList pushes out a change of state (should the user navigate back) and the button at the ResGal_End piece also pushes out this same change, but as the site grows and more links to other pages appear on other pages (workflows start to matrix each other) this is not going to suffice. 
- will most likely involve some useHistory or useLocation implementation. 

[] hide last pass/nord pass from job application form + contact us form 

## CSS clean up tasks: 
[ ] implement an id system to have images placed top, left, center, right, etc. as needed in the galleries 
	[ ] will probably need to do a second set of this for the responsive 		parts as well
[ ] make the BBB logo the third link in the footer and remove it from the left pane 

# Enhancement Logs 
[x] have the words change with each item on the slider as well as the photos 
    [ ] have testimonials that are sliding as well with photos of each project

[x] update the controls with ID tags and maybe manage some of the CSS that way as well so the inheretance is a little more broken up. Even writing them in separate files seems to not be as functional as I would like. 

[x] Figure out what the hell to do with the list of names for the controls within the about us caption slider. I cannot figure out a good way to get the rule line to go away whenver the active index is at zero 
    - could either apply styling or get it to be hidden or display some words that make sense (current solution??) just sick of dumping time into this TBH.
    - decided to just make the list loop with some clever JS logic within the naming functions, all based on the array of titles in the component.  

[0] have the arrows on the map in the footer rotate properly with the state of the direction containers.
    - probably will involve creating a deeper sense of state in order to handle what is active and what is not. 
    - right now I am just passing around some  CSS values to handle things and they aren't tied to a particular state of being in the website. 
(decided to not pursue this enhancement ATM, very low priority)


