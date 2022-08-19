# SPA Component Structure: 
App
└ Nav

└ HomePage
	└ Intro
	└ HomePageGallery 
	└ About Us
	└ CoServices (company services)
	└ TestimonialsPreview 
	└ Partners 
	└ RSS  
		
└ ServicesList
	└ ServiceBanner 
	└ Commercial Services²  
	└ Residential Services²  
	└ Brands¹²  

└ Gallery
	└ Gallery Banner 
	
	└ Commercial Gallery List¹
		└ Gallery Waiting Screen
		└ Gallery Viewer¹ 
			└ Gallery Frame¹
			└ Start Gal
	
	└ Residential Gallery List
		└ Gallery Waiting Screen
		└ Gallery Viewer¹ 
			└ Gallery Frame¹
			└ Start Gal
	
└ Team
	└ TeamIntro
	└ TeamList¹

└ Careers
	└ ApplyBanner  
	└ Apply
		└ Positions
			└ Sales Application 
			└ Tech Application

└ Confirmation³  

└ NotFound

└ Footer

└ Copyright
-----------------
¹ Reliant on local application data file.

² This component is rendered at the top level of App for marketing purposes (ease of access). In regards to understanding the UX of the application, these components can be seen as children of ServicesList, even if they are not from a technical perspective. 

³ This component is rendered at the top-level of App once the user has successfully submitted a job application. 



# Services

## Job Application 
### Purpose:
The job application feature of the website allows for a user to submit basic information about their expertise should they be interested in a position at our company. The information is collected through a digital form. 

### Workflow 
Careers >> Apply on our Website >> Select Position >> Enter Information >> error 
checking >> Confirmation. 

The form utilizes basic HTML form validation checking on the front end to present the user with error messaging coordinated to each entry field. The user is barred from submitting the form until validation criteria have been met. 

Once submission has been executed, the user is redirected to the /Confirmation screen. 

### Specs 
Libraries: 
- react-hook-form | https://react-hook-form.com/

react-hook-form is used to collect and validate user input before submission. At the time of submission, the form library delivers JSON information to the EmailJS API. 

	Relevant Files: 
	- client/src/Components/Pages_careers/TechApplication.js 
	- client/src/Components/Pages_careers/SalesApplication.js

External APIs:
- EmailJS | https://www.emailjs.com/

The EmailJS API is consuming the JSON object created by the react-hook-form library, along with required API authentication info and processing directions. Our account with EmailJS has corresponding templates that format the user input into readable fashion. Once the submission has been received and formatted, the EmailJS API uses the info@audiocontractorsllc.com email account to send a preformatted email with user submissions ... to itself. 

I'll say it again to clarify: emailJS automates info@audiocontractorsllc.com to send itself emails each time a user submits an application from our website. I agree it's a little redundant, but it's effecient and *works*.

## Galleries 

### Purpose
The Gallery service provides viewing access to our image database so users are able to browse a preselected set of images. The images are presented in categories for convenience. 

### Workflow 
Gallery >> Select Market (Comm or Resi) >> Select Category >> Loading Screen >> Gallery instructions > *(scrolling navigation)* > Gallery View

### Specs
Overview: 
The goal of the gallery was to avoid loading resource-intensive content until the user specifically requests it. When the request is made, Suspense has been utilized to communicate loading state to the user. 

The workflow and data flow sort of go hand-in-hand here ... 

Select Market (Comm or Resi) === Action informs app to use galleries_resi.js or galleries_comm.js   

View Categories === galleries_xxxx.js is used to display category list

Select Category === When category is selected, ID from galleries_xxxx.js is used to obtain database IDs from photo_ids.js that will be consumed in the API call.

Loading Screen ===  When API call is made, application state isLoading is set to true

Gallery View === last img element returned from API call changes application state isLoading to false, displaying the gallery to the user. 

This is pretty confusing to read through so i made a TL;DR diagram:
![](../Archive/galleryiesdiagram.jpg)

Local Data: 
- /client/src/assets/data/galleries_comm.js
	- used to display list of commercial categories. Contains ID that is consumed in order to retrieve the selected gallery. 

- /client/src/assets/data/galleries_resi.js
	- used to diplay a list of residential categories. Contains ID that is consumed in order to retrieve the selected gallery.

- /client/src/assets/data/galleries.js
	- complete list of galleries and ID's (unused)

- /client/src/assets/data/photo_ids.js
	- Contains organized objects of image IDs from the database, sorted by category. These IDs are consumed by the Gallery Viewer to construct a URL that will be passed into the API call to the database. Search: constructURL()

Please refer to Updating Galleries Guide to add or remove images from the gallery.

### Do NOT attempt to remove images by deleting from database! This would be a breaking change to the website. 










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
[x] will need to make a favicon image to use for the tab header and apple touch logo, thinking that just a simple crop of the "AC" in the logo and then vectorizing it will be the best move. 

[x] make a banner that has a bunch of the brands cascaded across LTR for the brands button and background transition.  

[x] what i need more photos of: 

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
[0] Probably do this when doing mobile responsive implementation, but will need to make the photo viewers swipe-able. (there is an article on how to do this in the notion. The one used to make the photo reels.)

[x] figure out how the hell to prevent the compiler from setting up the phone and email addresses incorrectly in chrome browsers 

[ ] will need to stabilize the application forms with redux because currently they are just wiping whenever the page is re-loaded 

[x] implement a better case of switching the galleryView state from true back to false in order to show the Nav, Footer whenever jumping around pages.
	- currently there is a sweet little hot fix in there where GalleryList pushes out a change of state (should the user navigate back) and the button at the ResGal_End piece also pushes out this same change, but as the site grows and more links to other pages appear on other pages (workflows start to matrix each other) this is not going to suffice. 
- will most likely involve some useHistory or useLocation implementation. 

[x] hide last pass/nord pass from job application form + contact us form 

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


