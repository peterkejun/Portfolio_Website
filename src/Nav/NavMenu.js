import React from 'react';
import {NavItem} from "./NavItem";
import { Link } from 'react-router-dom';

export class NavMenu extends React.Component {

    switchRoute(path) {

    }

    render() {
        const div_style = {
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: 'stretch',
            height: '100%',
            marginLeft: "5%",
        };

        const link_style = {
            display: 'flex',
            justifyContent: "center",
            alignItems: 'stretch',
            height: '100%',
            marginLeft: '5%',
            marginRight: '5%',
            textDecoration: 'none',
        };

        return <div style={div_style}>
            <Link to="/" style={link_style}>
                <NavItem title={'Home'} onSwitchRoute={this.switchRoute.bind(this, '/')} />
            </Link>
            <Link to="/projects" style={link_style}>
                <NavItem title={'Skills'} onSwitchRoute={this.switchRoute.bind(this, '/projects')} />
            </Link>
            <Link to="/projects" style={link_style}>
                <NavItem title={'Projects'} onSwitchRoute={this.switchRoute.bind(this, '/projects')} />
            </Link>
        </div>
    }

}
