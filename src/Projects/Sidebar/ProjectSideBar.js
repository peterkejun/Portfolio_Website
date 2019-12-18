import React from 'react';
import {ProjectSideControlPage} from "./ProjectSideControlPage";
import {ProjectSideListPage} from "./ProjectSideListPage";

export class ProjectSideBar extends React.Component {

    render() {
        const div_style = {
            padding: '0',
            backgroundColor: 'white',
            height: '100%',
            overflow: 'scroll',
        };

        return <div className={'col-lg-3 col-md-4'} style={div_style}>
            <ProjectSideControlPage ware={this.props.ware} onChangeWare={this.props.onChangeWare}/>
            <ProjectSideListPage projects={this.props.projects} selected_project_index={this.props.selected_project_index} onChangeWare={this.props.onChangeWare} onChangeProject={this.props.onChangeProject.bind(this)}/>
        </div>
    }

}
