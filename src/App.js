import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import FAQs from "./components/FAQsSection/FAQsSection";
import FeatureSection from "./components/featureSection/featureSection";
import Reviewcard from "./components/reviewCard/reviewCard";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pri from "./Pri";
import { Navigate } from "react-router";
import Privacy from "./components/Privacy";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(true);
  const [enable, setEnable] = useState("Dark mode");
  const [bg, setBg] = useState("");
  const [links, setLinks] = useState("#ffffff");
  const [MyStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1 px",
  });
  const handleonclick = () => {
    if (mode === false) {
      setMode(true);
      setEnable("light mode");
    } else {
      setEnable("Dark mode");
      setMode(false);
    }
    console.log(mode);
    if (MyStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid white",
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      if (bg === "#ffffff") {
        setBg("#000000");
      } else {
        setBg("#ffffff");
      }
      if (links === "#ffffff") {
        setLinks("#000000");
      } else {
        setLinks("#ffffff");
      }
    }
  };

  const Main = () => {
    return (
      <>
        <Intro bg={bg} links={links} mode={mode}></Intro>
        <About lightmode={handleonclick} style={MyStyle} mode={mode}></About>

        <FeatureSection mode={mode}></FeatureSection>
        <Reviewcard mode={mode}></Reviewcard>
        <FAQs mode={mode} />
        <Contact mode={mode}></Contact>
      </>
    );
  };
  return (
    <>
      <Navbar mode={mode} lightmode={handleonclick} enable={enable}></Navbar>
      {/* <Router> */}
      <Routes>
        <Route exact path="/" element={<Main />} />
        {/* <Route path="/privacy#3" element={<Main />} /> } */}
        {/* // when encounter /privacy#3 go to home page */}
        <Route path="#3" element={<Main />} />
        <Route exact path="/privacy" element={<Privacy mode={mode} />} />
      </Routes>
      {/* </Router> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
