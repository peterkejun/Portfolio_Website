import React from 'react';
import {ProjectSideSoftHardToggler} from "./ProjectSideSoftHardToggler";
export class ProjectSideControlPage extends React.Component {

    render() {
        const div_style = {
            height: '167px',
            backgroundColor: '#3D138D',
            position: 'sticky',
            top: '0',
        };

        return <div style={div_style}>
            <ProjectSideSoftHardToggler ware={this.props.ware} onChangeWare={this.props.onChangeWare}/>
        </div>
    }

}
