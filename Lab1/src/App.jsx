import Footer from "./component/Layout/Footer/Footer";
import { Header } from "./component/Layout/Header/Header";
import About from "./component/common/About/About";
import Slider from "./component/common/Slider/Slider";
import Services from './component/common/Services/Services';
import Skill from "./component/common/Skill/Skill";
// import Portfolio from "./component/common/Portfolio/Portfolio";
import Experience from "./component/common/Experience/Experience";
// import Testimonials from "./component/common/Testimonials/Testimonials";
import Contact from "./component/common/Contact/Contact";

function App() {

  return (
    <>
      <Header />
      <div className="page-content">
        <div id="content">
          <Slider />
          <About />
          <Skill />
          <Services />
          {/* <Portfolio /> */}
          <Experience />
          {/* <Testimonials /> */}
          <Contact />
        </div>
      </div >
      <Footer />

    </>
  )
}

export default App
