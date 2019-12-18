import React from "react";
import {ProjectSideBar} from "./ProjectSideBar";
import './ProjectPage2.css';
import {ProjectDisplayPage} from "./ProjectDisplayPage";
import {ProjectNavBar} from "./ProjectNavBar";

export class ProjectPage2 extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            projects: [],
        };
        this.sidebar_ref = React.createRef();
        this.display_ref = React.createRef();
    }

    componentDidMount() {
        //http://127.0.0.1:8080?prop_type=programming
        fetch("http://ec2-3-19-185-142.us-east-2.compute.amazonaws.com/index.php?prop_type=programming", {
            method: 'GET',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        projects: result
                    });
                },
                (error) => {
                    this.setState({
                        project_items: [],
                    });
                    console.log(error);
                }
            )
    }

    render() {
        return <div className={'project-page-container'} ref={this.container_ref} >
            {/*<ProjectNavBar />*/}
            <ProjectDisplayPage projects={this.state.projects} child_ref={this.display_ref}/>
            {/*<ProjectSideBar projects={this.state.projects} child_ref={this.sidebar_ref} />*/}
        </div>
    }

}
