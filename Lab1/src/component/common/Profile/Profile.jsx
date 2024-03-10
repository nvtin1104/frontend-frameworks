import React from "react";
import About from './../About/About';
import Skill from './../Skill/Skill';
import Experience from './../Experience/Experience';
import Services from './../Services/Services';
export const Profile = React.forwardRef((props, ref) => {
        return (
            <div ref={ref}>
            <About />
            <Skill />
            <Experience />
            <Services />
        </div>
        );
    });

Profile.displayName = "Profile";
