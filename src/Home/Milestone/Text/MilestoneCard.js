import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MilestoneCardDateLabel} from "./MilestoneCardDateLabel";
import './MilestoneCard.css'

export class MilestoneCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.blog.id,
            title: props.blog.title,
            content: props.blog.content,
            date: new Date(Date.parse(props.blog.date)),
            img_url: props.blog.img_url,
        };

    }


    render() {
        const date_options = {
            weekday: 'short',
            month: 'long',
            year: 'numeric',
            day: 'numeric',
        };

        return <div className={'card milestone-card'}>
            <div className={'card-header milestone-card-header'}>
                <MilestoneCardDateLabel date_string={this.state.date === "N/A" ? "November 3, 2019" : this.state.date.toLocaleDateString("en-US", date_options)} theme={'light'} />
            </div>

            <div className={'card-body milestone-card-body'}>
                <h5 className={'card-title milestone-card-title'}>{this.state.title === "N/A" ? "Header" : this.state.title}</h5>
                <p className={'card-text milestone-card-text'}>{this.state.content === "N/A" ? "Lorem ipsum" : this.state.content}</p>
            </div>
            <div className={'card-footer milestone-card-footer'}>
                <h5 className={'milestone-card-read-more-title'}>Read more ></h5>
            </div>
        </div>
    }

}
