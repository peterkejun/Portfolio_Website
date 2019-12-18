import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../../Nav/NavBar";
import {ProjectsScrollPage} from "./ProjectsScrollPage";
import {ProjectDisplayPage} from "./ProjectDisplayPage";

export class ProjectPresentationPage extends React.Component {

    render() {
        const div_style = {
            backgroundColor: '#EFEEF1',
            display: 'flex',
            justifyContent: "stretch",
        };

        const navbar_style = {
            width: '100%',
            zIndex: '2',
            position: 'absolute',
        };

        const display_page_style = {
            height: '100%',
            zIndex: '1',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };

        const scroll_page_style = {
            height: '100%',
            zIndex: '0',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-end',
        };

        return <div className={'col-lg-9'} style={div_style}>
            {/*<div style={navbar_style}>*/}
            {/*    <NavBar style={navbar_style}/>*/}
            {/*</div>*/}
            <div className={'container-fluid col-lg-6'} style={display_page_style}>
                <ProjectDisplayPage selected_project_index={this.props.selected_project_index}/>
            </div>
            <div className={'container-fluid'} style={scroll_page_style}>
                <ProjectsScrollPage projects={this.props.projects} selected_project_index={this.props.selected_project_index}/>
            </div>
        </div>
    }

}
