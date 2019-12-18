import React from "react";
import {ProjectsAppPage} from "./ProjectsAppPage";
import './ProjectsPage.css'
import {ProjectsViewToggler} from "./ProjectsViewToggler";
import {ProjectsGridPage} from "./ProjectsGridPage";

export class ProjectsPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            projects: 'N/A',
            view_mode: 'grid',
        };
        // http://127.0.0.1:8080?prop_type=projects
        // http://ec2-3-19-185-142.us-east-2.compute.amazonaws.com/index.php
        fetch("http://ec2-3-19-185-142.us-east-2.compute.amazonaws.com/index.php", {
            method: 'GET',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        projects: result,
                        view_mode: this.state.view_mode,
                    });
                },
                (error) => {
                    this.setState({
                        projects: 'N/A',
                        view_mode: this.state.view_mode,
                    });
                    console.log(error);
                }
            )
    }

    changeViewMode(new_mode) {
        this.setState({
            view_mode: new_mode,
        })
    }


    render() {
        const projects_to_prop = this.state.projects === 'N/A' ? [] : this.state.projects;
        let view_page = this.state.view_mode === 'grid' ? <ProjectsGridPage projects={projects_to_prop} /> : <ProjectsAppPage projects={projects_to_prop} />

        return <div className={'container-fluid main'}>
            <h1 className={'project-title'}>Projects</h1>
            <p className={'col-lg-7 project-description'}>I like to explore how building connections between particular technologies can bring surprising results. I have come up with a few personal projects. </p>
            <ProjectsViewToggler view_mode={this.state.view_mode} onChangeMode={this.changeViewMode.bind(this)} />
            { view_page }
        </div>
    }

}
