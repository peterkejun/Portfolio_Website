import React from "react";
import './MilestoneCardDateLabel.css'

export class MilestoneCardDateLabel extends React.Component {

    render() {
        const h1_style = {
            color: this.props.theme === 'dark' ? '#CE5852' : '#A2423D',
        };

        return <div className={'milestone-card-date-label'}>
            <div>
                <h1 style={h1_style}>{this.props.date_string}</h1>
            </div>
        </div>
    }

}
