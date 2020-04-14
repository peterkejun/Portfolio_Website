import React from "react";
import github from '../../img/tools/github_logo.svg';
import linkedin from '../../img/linked_in_logo.svg';
import appstore from '../../img/app_store_logo.svg';
import profile from '../../img/profile.svg';
import './BackgroundPage.css';

export class BackgroundPage extends React.Component {

    render() {
        return <div className={'background-page-container'}>
            <div className={'background-page-wrapper'}>
                <div className={'col-md-8 background-text-container'}>
                    <h1 className={'section-title background-title'}>About Me</h1>
                    <p className={'section-subtitle background-large-paragraph'}>I am a self-directed and motivated software developer skilled in assembly, C/C++, Java, Javascript, Objective C & Swift, React framework and PHP backend, and with experience in embedded, desktop, iOS, and web development.</p>
                    <div className={'background-subtitles-container'}>
                        <div className={'col-lg-6 background-education-container'}>
                            <h1 className={'background-subtitle'}>Education</h1>
                            <p className={'background-small-paragraph'}>1B Software Engineering,<br />University of Waterloo</p>
                        </div>
                        <div className={'col-lg-6 background-footprint-container'}>
                            <h1 className={'background-subtitle'}>Footprints</h1>
                            <div className={'background-footprint-img-container'}>
                                <a href={'https://github.com/peterkejun'} target={'_blank'}>
                                    <img className={'background-footprint-img background-footprint-img-start-edge'} src={github} alt={'Github'} />
                                </a>
                                <a href={'https://www.linkedin.com/in/peter-ke-12465b195/'} target={'_blank'}>
                                    <img className={'background-footprint-img'} src={linkedin} alt={'LinkedIn'} />
                                </a>
                                <img className={'background-footprint-img background-footprint-img-end-edge'} src={appstore} alt={'App Store'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-md-4 background-image-container'}>
                    <img className={'background-profile-image'} src={profile} alt={'profile'} />
                </div>
            </div>
        </div>
    }

}
