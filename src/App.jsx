import React from 'react'
import "./index.css";
import  Home from "./routes/Home/Home"
import About from './routes/About/About';
import Project from './routes/Project/Project';
import Form from './Components/Form/Form';
import {Route,Routes} from "react-router-dom";
function App(){
  return (
    <>
<Routes>
  <Route path = "/" element = {<Home/>}/>
  <Route path = "/about" element = {<About/>}/>
  <Route path = "/project" element = {<Project/>}/>
  <Route path = "/contact" element = {<Form/>}/>
</Routes>
    </>
  )
}

export default App
// import React from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
// import Services from './Components/Services/Services';
// import About from './Components/About/About';
// import Skill from './Components/Skill/Skill';
// import Portfolio from './Components/Portfolio/Portfolio';
// import Contact from './Components/Contact/Contact';

// const App = () => {
//   return (
//     <main>
//       <Navbar/>
//       <Home/>
//       <Services/>
//       <About/>
//       <Skill/>
//       <Portfolio/>
//       <Contact/>
//     </main>
//   );
// };

// export default App;


// import './App.css'
// import Navbar from './Components/Navbar/Navbar'
// import Home from "./Components/Home/Home"
// import About from './Components/About/About'
// import Skill from './Components/Skill/Skill'
// import Contact from './Components/Contact/Contact'


// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Services from './Components/Services/Services'
// import Portfolio from './Components/Portfolio/Portfolio'
// // import ScrollToTop from './ScrollToTop'

// function App() {
//     const router = createBrowserRouter([

//         {
//           path: "/",
//           element:<><Navbar/><Home/></>
          
          
//         },
//         {
//           path : "/services",
//           element:<><Navbar/><Services/></>
//         },
//         {
//           path : "/about",
//           element:<><Navbar/><About/></>
//         },
//         {
//           path : "/skill",
//           element:<><Navbar/><Skill/></>
//         },
//         {
//           path : "/portfolio",
//           element:<><Navbar/><Portfolio/></>
//         },
//         {
//           path : "/contact",
//           element:<><Navbar/><Contact/></>
//         }
       
//     ])
//     return (
//         <>

//             <RouterProvider router={router} />
//        {/* <ScrollToTop/> */}
           
//         </>
//     )

//   }  
//   export default App;