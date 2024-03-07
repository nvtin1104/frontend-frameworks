
// import Portfolio from "./component/common/Portfolio/Portfolio";
// import Testimonials from "./component/common/Testimonials/Testimonials";

import Slider from "../component/common/Slider/Slider";
import About from './../component/common/About/About';
import Skill from './../component/common/Skill/Skill';
import Experience from './../component/common/Experience/Experience';
import Services from './../component/common/Services/Services';


const  Home = () => {

    return (
        <>
            <Slider />
            <About />
            <Skill />
            <Experience />
            <Services />
        </>
    )
}

export default Home
