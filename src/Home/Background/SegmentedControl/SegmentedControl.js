import React from "react";
import {SegmentedControlItem} from "./SegmentedControlItem";
import './SegmentedControl.css';

export class SegmentedControl extends React.Component {

    render() {
        return <div className={'segmented-control-container'}>
            <div className={'segmented-control-inner-container'}>
                {
                    this.props.items.map((item, i) =>
                        <SegmentedControlItem item={item} key={i} index={i} selected={i === this.props.selected_item} onSelect={this.props.onSelect.bind(this)}/>
                    )
                }
            </div>
        </div>
    }

}
