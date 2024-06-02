import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return ( <div>
    <Cursor/>
    <section id="Homepage">
    <Navbar/><Hero/></section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section><br/>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
    {/* <Test/> */}
  </div>)
};

export default App;
