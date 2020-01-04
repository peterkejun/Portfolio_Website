import React from "react";
import {MilestoneCardDateLabel} from "../../Milestone/Text/MilestoneCardDateLabel";
import './ProjectItem2.css';

export class ProjectItem2 extends React.Component {

    render() {
        let sections = [];
        for (let i = 0; i < this.props.project.content.length; i++) {
            const content = this.props.project.content[i];
            if (content.style === 'list') {
                const list_items = content.text.split(', ');
                let list = [];
                for (let j = 0; j < list_items.length; j++) {
                    list.push(
                        <li className={'project-item-list-item'} key={j}>
                            <p className={'project-item-text project-item-list-text'}>{list_items[j]}</p>
                        </li>
                    )
                }
                sections.push(
                    <section>
                        <h2 className={'project-item-subtitle'}>{content.subtitle}</h2>
                        <ul className={'project-item-list'}>
                            {list}
                        </ul>
                    </section>
                )
            } else {
                sections.push(
                    <section key={i}>
                        {/*<h2 className={'project-item-subtitle'}>{content.subtitle}</h2>*/}
                        {/*<p className={'project-item-text'}></p>*/}
                    </section>
                )
            }
        }
        return <div className={'container-fluid project-item-container project-item2-container'}>
            <div className={'col-lg-7 col-sm-12 project2-item-text-container'}>
                <h1 className={'project-item-title'}>{this.props.project.title}</h1>
                <div className={"date-and-type-container"}>
                    <div className={'badge badge-pill'}>{this.props.project.type}</div>
                    <MilestoneCardDateLabel theme={'dark'} date_string={this.props.project.date_string} />
                    {sections}
                    <h2 className={'project-item-subtitle'}>Description</h2>
                    <p className={'project-item-text project-item2-text'}>{this.props.project.description}</p>
                </div>
            </div>
            <div className={'col-lg-5 col-sm-12 project2-item-image-container'}>
                <img className={'img-fluid project-item2-image'} src={this.props.project.img_url} alt={'project item'} onClick={this.props.display_lightbox.bind(this, this.props.project.img_url)}/>
                <h1 className={'project-item-text click-to-view-title'}>Click to view</h1>
            </div>
        </div>
    }

}
