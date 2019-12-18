import React from "react";
import * as THREE from 'three';
import anime from "animejs";
import Rings from "./vanta_src/vanta.rings";
import { Link } from "react-router-dom";
import './LandingPage.css';

export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = Rings({
            el: this.vantaRef.current,
            THREE: THREE,
        });
        var textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: '.ml12 .letter',
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 1200 + 30 * i
            });
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render() {
        return <div className={'landing-container'}>
            <div className={'vanta-container'} ref={this.vantaRef} />
            <div className={'text-wrapper'}>
                <h1 className="ml12">
                    <span className={'letter'}>P</span>
                    <span className={'letter'}>e</span>
                    <span className={'letter'}>t</span>
                    <span className={'letter'}>e</span>
                    <span className={'letter'}>r</span>
                    <span className={'letter'}> </span>
                    <span className={'letter'}>K</span>
                    <span className={'letter'}>e</span>
                </h1>
            </div>
            <div className={'go-to-projects-container'}>
                <Link to={'/projects'}>
                    <button type="button" className="go-to-projects-button btn btn-info btn-lg">Go to projects</button>
                </Link>
            </div>
        </div>
    }

}
