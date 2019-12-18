import React from 'react';
import {ProjectSideBar} from "./Sidebar/ProjectSideBar";
import {ProjectPresentationPage} from "./Presentation/ProjectPresentationPage";

export class ProjectsAppPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected_project_index: 0,
            ware: 'software',
        };
    }

    projects_slice(type) {
        let p = [];
        for (let i = 0; i < this.props.projects.length; i++) {
            if (this.props.projects[i].type === type) {
                p.push(this.props.projects[i]);
            }
        }
        return p;
    }

    changeWare() {
        this.setState({
            projects: this.props.projects,
            selected_project_index: this.state.selected_project_index,
            ware: this.state.ware === 'software' ? 'hardware' : 'software',
        });
    }

    changeProject(index) {
        console.log("project changed to " + index);
        this.setState({
            projects: this.props.projects,
            selected_project_index: index,
            ware: this.state.ware,
        })
    }

    render() {
        const div_style = {
            display: 'flex',
            alignItems: 'stretch',
            height: '100vh',
            minHeight: '700px',
            border: '7px solid #4A1E96',
            borderRadius: '36px',
            overflow: 'hidden',
            padding: '0',
            marginLeft: '2rem',
            marginRight: '2rem',
        };

        const projects_to_prop = this.projects_slice(this.state.ware);

        return <div className={'col-sm-11'} style={div_style}>
            <ProjectPresentationPage projects={projects_to_prop} selected_project_index={this.state.selected_project_index}/>
            <ProjectSideBar ware={this.state.ware} projects={projects_to_prop} selected_project_index={this.state.selected_project_index} onChangeWare={this.changeWare.bind(this)} onChangeProject={this.changeProject.bind(this)}/>
        </div>
    }

}
