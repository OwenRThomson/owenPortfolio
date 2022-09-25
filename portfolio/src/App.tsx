/* src/App.jsx */
import React from "react";
import "./App.css";
import {Hero} from "./components/hero";
import {Testimonial} from "./components/testimonial";
import {Timeline} from "./components/timeline";




function App() {
  return (
    <div className="App">
      
      <Hero />
      <Timeline />
      <Testimonial />
    </div>
  );
}



export default App;
