import React from "react";

export class ProjectsGridItem extends React.Component {

    render() {
        return <div className={'card'}>
            <div className={'card-body'}>
                <h5 className="card-title">{this.props.project.title}</h5>
                <p className="card-text">{this.props.project.description}</p>
            </div>
        </div>
    }

}
