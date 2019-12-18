import React from "react";
import {ContactOptionsItem} from "./ContactOptionsItem";

export class ContactOptionsPage extends React.Component {

    render() {
        const div_style = {
            marginTop: '50px',
            marginLeft: '5%',
            marginRight: '5%',
        };
        return <div style={div_style}>
            <div className={'card-deck'}>
                <ContactOptionsItem item={'collaboration'} />
                <ContactOptionsItem item={'resume'} />
                <ContactOptionsItem item={'support'} />
            </div>
        </div>
    }

}
