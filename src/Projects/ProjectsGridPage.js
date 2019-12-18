import React from "react";
import {ProjectSideListItem} from "./Sidebar/ProjectSideListItem";
import './ProjectsGridPage.css'

export class ProjectsGridPage extends React.Component {

    render() {
        return <div className={'col-lg-12 col-sm-12 projects-grid-container'}>
            <div className={'row projects-grid-row'}>
                {
                    this.props.projects.map((project, i) =>
                        <div className={'col-sm-6'}>
                            <div className={'card projects-grid-card'}>
                                <ProjectSideListItem key={i}
                                                     project={project}
                                                     index={i}
                                                     selected={false}
                                                     highlight_on_hover={false}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    }

}
