import React from "react";
import './SegmentedControlItem.css'

export class SegmentedControlItem extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            hover: false,
        }
    }

    toggleHover() {
        this.setState({
            hover: !this.state.hover,
        })
    }

    render() {
        const container_background_style = {
            backgroundColor: this.props.selected ? 'rgba(256, 256, 256, 0.15)' : (this.state.hover ? 'rgba(256, 256, 256, 0.05)' : 'transparent'),
        };
        return <div className={'segmented-control-item-container'}
                    style={container_background_style}
                    onMouseEnter={this.toggleHover.bind(this)}
                    onMouseLeave={this.toggleHover.bind(this)}
                    onClick={this.props.onSelect.bind(this, this.props.index)}>
            <h1>{this.props.item}</h1>
        </div>
    }

}
