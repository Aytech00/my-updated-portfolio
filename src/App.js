import React from "react";
import {Route, RouterProvider, createRoutesFromElements, createBrowserRouter} from 'react-router-dom'

// Pages
import Sidebar from "./Layouts/Sidebar";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import About from './Pages/About'
import Blog from "./Pages/blog";
import DefaultLayout from "./Layouts/DefaultLayout";

// Create routes from elements

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
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
