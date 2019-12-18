import React from 'react';
import {ProjectSideListItem} from "./ProjectSideListItem";

export class ProjectSideListPage extends React.Component {

    render() {

        const div_style = {
            paddingTop: '23px',
        };

        return <div style={div_style}>
            { this.props.projects !== 'N/A' &&
                this.props.projects.map((project, i) =>(
                    <ProjectSideListItem key={i}
                                         project={project}
                                         index={i}
                                         selected={this.props.selected_project_index === i}
                                         onSelect={this.props.onChangeProject.bind(this)}
                                         highlight_on_hover={true}/>
                ))
            }
        </div>
    }

}
