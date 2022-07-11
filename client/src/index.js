// * DEPENDS. 
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store.js';
import {Provider} from 'react-redux';

// * COMPS
import App from "./Components/App.js";

// * UTILS
import ScrollToTop from './utils/handlers/ScrollToTop.js';

// * CSS 
import "./index.css"

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container)


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
