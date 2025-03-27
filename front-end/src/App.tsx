import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import OurTeam from "./Pages/OurTeam/OurTeam";
import MobileApps from "./Pages/MobileApps/MobileApps";
import WebDevelopment from "./Pages/WebDevelopment/WebDevelopment";
import ContactUs from "./Pages/Contact/ContactUs";
import Blog from "./Pages/Blog/Blog";
import Finalyze from "./Pages/Finalyze/finalyze";
import Policy from "./Pages/Policy/policy";
import Purge from "./Pages/Purge/purge";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/about_us" element={<About />} />
          <Route path="/about/our_team" element={<OurTeam />} />
          <Route path="/services" element={<MobileApps />} />
          <Route path="/services/mobile_apps" element={<MobileApps />} />
          <Route path="/services/mobile_apps/finalyze_2.0" element={<Finalyze />} />
          <Route path="/services/mobile_apps/finalyze_2.0/privacy_policy" element={<Policy />} />
          <Route path="/services/mobile_apps/finalyze_2.0/purge_your_data" element={<Purge />} />
          <Route
            path="/services/web_development"
            element={<WebDevelopment />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
