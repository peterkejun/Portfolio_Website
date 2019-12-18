import React from "react";
import {MilestoneCardDateLabel} from "../Milestone/Text/MilestoneCardDateLabel";
import './ProjectItem.css';
import { Link } from 'react-router-dom';

export class ProjectItem extends React.Component {

    render() {
        let sections = [];
        console.log(this.props.item.content);
        for (let i = 0; i < this.props.item.content.length; i++) {
            const content = this.props.item.content[i];
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
                        {/*<p className={'project-item-text'}>{content.text}</p>*/}
                    </section>
                )
            }
        }
        return <Link to={'/projects'}>
            <div className={'project-item-container card'}>
                <div className={'project-item-half-container'}>
                    <div className={'project-item-image-container'}>
                        <img className={'img-fluid project-item-image'} src={this.props.item.img_url} alt={'thermometer'} />
                    </div>
                </div>
                <div className={'project-item-half-container'}>
                    <div className={'project-item-text-container'}>
                        <h1 className={'project-item-title'}>{this.props.item.title}</h1>
                        <div className={'badge badge-pill badge-warning'}>{this.props.item.type}</div>
                        <MilestoneCardDateLabel date_string={this.props.item.date_string} theme={'dark'}/>
                        {/*{sections}*/}
                        <p className={'project-item-text'}>
                            {this.props.item.description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>

    }

}
