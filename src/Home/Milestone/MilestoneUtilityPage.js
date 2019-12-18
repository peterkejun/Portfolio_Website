import React from 'react';
import {Calendar} from "../../Utilities/Calendar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MilestoneUtilityPage.css';

export class MilestoneUtilityPage extends React.Component {

    render() {
        return <div className={'col-lg-4 col-md-5 col-sm-0 col-0 milestone-utility-container'}>
            <div className={'container-fluid milestone-utility-inner-container'}>
                <Calendar />
            </div>
        </div>
    }

}
