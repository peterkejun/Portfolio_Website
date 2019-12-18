import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProjectsScrollCenterPage} from "./ProjectsScrollCenterPage";
import {ProjectsScrollBottomPage} from "./ProjectsScrollBottomPage";
import {ProjectsScrollTopPage} from "./ProjectsScrollTopPage";

export class ProjectsScrollPage extends React.Component {

    constructor(props) {
        super(props);
        this.initial = this.props.selected_project_index;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.initial = this.props.selected_project_index;
    }

    render() {
        const div_style = {
            height: '100%',
            paddingRight: '10%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
        };

        return <div className={'col-sm-9'} style={div_style}>
            <ProjectsScrollTopPage projects={this.props.projects} initial={this.initial} final={this.props.selected_project_index}/>
            <ProjectsScrollCenterPage projects={this.props.projects} animated={true} initial={this.initial} final={this.props.selected_project_index}/>
            <ProjectsScrollBottomPage projects={this.props.projects} initial={this.initial} final={this.props.selected_project_index}/>
        </div>
    }

}
