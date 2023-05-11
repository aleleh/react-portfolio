import { useRoutes } from "react-router-dom";
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

function App() {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "about", element: <AboutPage /> },
    { path: "running", element: <RunningPage /> },
    { path: "projects", element: <ProjectsPage /> },
    { path: "contact", element: <ContactPage /> },
    { path: "project1", element: <Project1 /> },
    { path: "project2", element: <Project2 /> },
    { path: "project3", element: <Project3 /> },
    { path: "project4", element: <Project4 /> },
    { path: "project5", element: <Project5 /> },
    { path: "project6", element: <Project6 /> },
  ]);

  return (
    <div className="App">
      <NavBar />
      {element}
      <Footer />
    </div>
  );
}

export default App;
