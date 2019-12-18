import React from "react";
import menu from '../../../img/menu.svg';
import home from '../../../img/home.svg';
import { Link } from 'react-router-dom';
import './ProjectNavBar.css';

export class ProjectNavBar extends React.Component {

    render() {
        return <div className={'project-nav-container'}>
            <img className={'nav-img menu-img'} src={menu} alt={'menu'} />
            <Link to={'/'}>
                <img className={'nav-img home-img'} src={home} alt={'home'} />
            </Link>
        </div>
    }

}
