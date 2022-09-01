# SPA Component Structure: 
App
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
Careers >> Apply on our Website >> Select Position >> Enter Information >> error checking >> Confirmation. 

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
The goal of the gallery was to avoid loading resource-intensive content until the user specifically requests it. When the request is made, Suspense has been utilized with global state management to communicate loading status to the user. 

The workflow and data flow sort of go hand-in-hand here ... 

Select Market (Comm or Resi) === Action informs app to use galleries_resi.js or galleries_comm.js   

View Categories === galleries_xxxx.js is used to display category list

Select Category === When category is selected, ID from galleries_xxxx.js is used to obtain database IDs from photo_ids.js that will be consumed in the API calls.

Loading Screen ===  When API call is made, application state isLoading is set to true

Gallery View === last img element returned from API call changes application state isLoading to false, displaying the gallery to the user. 

### This is pretty confusing to read through so i made a TL;DR diagram:
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

#### Please refer to Updating Galleries Guide to add or remove images from the gallery.

### Do NOT attempt to remove images by deleting from database! This would be a breaking change to the website. 

### Scrolling Navigation Feature: 
Under the hood, gallery navigation is comprised of two concepts ...
- each image frame is 0000px "tall"
- the user is increasing a non-zero integer while scrolling the Y-axis

...that work together: 
- when the non-zero integer === the "height" of the image, begin scrolling to the next image 

this allows for a more guided feel to the image galleries on touch screen devices. 

see files: 
	- client/src/Components/Pages_gallery/GalleryFrame.js
	- client/src/Components/Pages_gallery/GalleryViewer.js


# Running the application locally
This project is using yarn as the package manager.

```
git clone [repo link]

cd audiocon_pub/client 

yarn install 
```

this will install the dependencies of the project. The following are worth noting:

react-router-dom -- manages the organization and navigation of the website.

react-hook-form -- collects user input data and performs validation on the webpage; used to build forms.

react-photoswipe-gallery -- manages the homepage gallery. NOT the Commercial and Residential galleries.  

react-redux -- manages global state of the application. 

reactjs-popup -- manages display of the menu on mobile devices. can also be used for website marketing purposes.  

after this step in the set up is complete, run the application with: 
```
yarn start
```


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
#ffff78
#71797E
#008000
#F20000

bullet HTML snippet: &#8226;

Headers: font-family: 'Staatliches', cursive;
Subheaders: font-family: 'Crete Round', serif;
Section Header: font-family: 'Cabin', sans-serif;
Body Copy: font-family: 'Crete Round', serif;
Quote: font-family: 'Signika', sans-serif;
Citation: font-family: 'Press Start 2P', cursive;
Link: font-family: 'Crete Round', serif;

google project ID: cosmic-answer-350614

## Media Break Points: 
1600px
1500px
1350px
1150px
600px



