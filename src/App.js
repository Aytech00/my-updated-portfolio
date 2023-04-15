import React from "react";
import {Route, RouterProvider, createRoutesFromElements, createBrowserRouter} from 'react-router-dom'

// Pages
import Sidebar from "./Layouts/Sidebar";
import Home from "./Pages/Home";
import Portfolio from './Pages/Portfolio'
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume"
import About from './Pages/About'

// Create routes from elements

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Sidebar />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Route>
  )
);


function App() {
  return (
  <RouterProvider router={router}>

  </RouterProvider>
  );
}

export default App;
