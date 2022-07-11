// * DEPENDS *
import React from 'react';
import {Routes, Route} from 'react-router-dom';

// * ON-PAGE COMPS *
import Nav from './Nav.js'
import Footer from './Footer.js';
import Copyright from './Copyright';

// * ROUTE PAGES 
import HomePage from '../Pages/HomePage.js';
import Team from '../Pages/Team.js'
import Brands from './Pages_services/Brands.js';
import NotFound from './Pages_aux/NotFound.js';
import Apply from './Pages_careers/Apply.js';
import Gallery from '../Pages/Gallery.js';
import GalleryFrame from './Pages_gallery/GalleryFrame.js';
import ServicesList from '../Pages/SerivcesList.js';
import SalesApplication from './Pages_careers/SalesApplication.js';
import TechApplication from './Pages_careers/TechApplication.js';
import Positions from './Pages_careers/Positions.js';
import ResidentialServices from './Pages_services/ResidentialServices.js';
import CommercialServices from './Pages_services/CommercialServices.js';
import ResidentialGalleryList from './Pages_gallery/ResidentialGalleryList.js';
import CommercialGalleryList from './Pages_gallery/CommercialGalleryList.js';
import TestimonialGallery from './Pages_Testimonials/TestimonialGallery.js';
import Confirmation from './Pages_aux/Confirmation.js';


// * display comps quick ref
// import WaitingScreen from './Pages_aux/WaitingScreen.js';

// * CSS
import "../CSS/App.css"


function App() {

  return (
    <div id="App" className="App">
        <Nav />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route exact path="/brands" element={<Brands />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/apply" element={<Apply />} />
          <Route exact path="/apply/positions" element={<Positions />} />
          <Route exact path="/apply/positions/1" element={<TechApplication />} />
          <Route exact path="/apply/positions/2" element={<SalesApplication />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route path="gallery/residentialgallerylist/:id" element={<GalleryFrame/>} />
          <Route path="gallery/commercialgallerylist/:id" element={<GalleryFrame />} />
          <Route exact path="/gallery/residentialgallerylist" element={<ResidentialGalleryList />} />
          <Route exact path="/gallery/commercialgallerylist" element={<CommercialGalleryList />} />
          <Route exact path="/serviceslist" element={<ServicesList />} />
          <Route exact path="/residentialServices" element={<ResidentialServices />} />
          <Route exact path="/commercialServices" element={<CommercialServices />} />
          <Route exact path="/testimonials" element={<TestimonialGallery />} />
          <Route exact path="/confirmation" element={<Confirmation />} />
          {/* <Route path="/waiting" element={<WaitingScreen/>} /> */}
        </Routes>
        <Footer />
        <Copyright />
    </div>
  );
}

export default App;
