// Imports Route, Routes which takes care of routing in V6 instead of BrowserRouter  
// also imports all compnents

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import RunningPage from "./components/RunningPage";
import Project1 from "./components/projects/Project1";
import Project2 from "./components/projects/Project2";
import Project3 from "./components/projects/Project3";
import Project4 from "./components/projects/Project4";
import Project5 from "./components/projects/Project5";
import Project6 from "./components/projects/Project6";

// Main layout of the app with navbar, client side routing and a footer
// Makes it possible to render different components based on the url path
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} index />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/running" element={<RunningPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

