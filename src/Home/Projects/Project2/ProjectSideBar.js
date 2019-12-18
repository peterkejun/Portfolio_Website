import React from "react";
import './ProjectSideBar.css';
import menu from "../../../img/menu.svg";
import home from "../../../img/home.svg";
import { Link } from 'react-router-dom';

export class ProjectSideBar extends React.Component {

    render() {
        return <div className={'col-md-3 offset-md-9 col-sm-6 offset-sm-6 col-10 offset-2 project-sidebar-container'} ref={this.props.child_ref}>
            <div className={'float-sidebar-container'}>
                {
                    this.props.projects.map((project, i) =>
                        <div className={'project-item'} key={i} >
                            <h1 className={'project-title'}>{project.title}</h1>
                            <div className={'badge badge-pill'}>{project.type}</div>
                        </div>
                    )
                }
            </div>
        </div>
    }

}
