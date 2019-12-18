import React from 'react';
import './Home.css';
import NavBar from '../Nav/NavBar';
// import {LandingPage} from "../Home/Landing/LandingPage";
import {MilestonePage} from "./Milestone/MilestonePage";
import {ContactOptionsPage} from "./ContactOptions/ContactOptionsPage";
import {ContactPage} from "./Contact/ContactPage";
import {ProjectsPage} from "../Home/Projects/ProjectsPage";
import {BackgroundPage} from "./Background/BackgroundPage";
import {FooterPage} from "./Footer/FooterPage";
import {ProjectPage2} from "./Projects/Project2/ProjectPage2";

export class Home extends React.Component {
    render() {
        return <div className="Home">
            {/*<NavBar />*/}
            {/*<LandingPage />*/}
            <BackgroundPage />
            <ProjectsPage />
            {/*<MilestonePage />*/}
            {/*<ContactOptionsPage />*/}
            <ContactPage />
            <FooterPage />
        </div>
    }
}

export default Home;
