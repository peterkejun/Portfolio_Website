import React from 'react';
import {NavMenu} from "./NavMenu";

export default class NavBar extends React.Component {

    render() {
        const div_style = {
            height: '77px',
            width: '100%',
            margin: '0',
            padding: '0',
            backgroundColor: 'none',
            top: '0',
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: 'center',
        };

        const h1_style = {
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#3D138D',
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '0',
            marginBottom: '0',
            cursor: 'default',
        };

        const vs_style = {
            width: '2px',
            height: '40%',
            marginRight: '2%',
            backgroundColor: '#3E138D',
            borderRadius: '1px',
        };

        return <div className="nav-bar" style={div_style}>
            <h1 style={h1_style}>Peter Ke</h1>
            <div style={vs_style}> </div>
            <NavMenu />
        </div>
    }

}
