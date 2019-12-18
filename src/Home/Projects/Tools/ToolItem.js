import React from "react";
import './ToolItem.css';

export class ToolItem extends React.Component {

    render() {
        const border_style = {
            borderColor: this.props.selected ? 'white' : 'transparent',
        };
        return <div className={'tool-item-container'} style={border_style} onClick={this.props.onClick.bind(this, this.props.index)}>
            <img className={'tool-item-image'} src={this.props.tool.img_url + '?sanitize=true'} alt={'tool'} />
            <h1 className={'tool-item-title'}>{this.props.tool.name}</h1>
        </div>
    }

}
