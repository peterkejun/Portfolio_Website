import React from 'react';
import {MilestoneTextPage} from "./Text/MilestoneTextPage";
import {MilestoneUtilityPage} from "./MilestoneUtilityPage";
import './MilestonePage.css';

export class MilestonePage extends React.Component {

    render() {
        return <div className={'milestone-page'}>
            <h1 className={'section-title milestone-page-title'}>Milestones</h1>
            <p className={'section-subtitle milestone-page-description'}>Keep track of updates including bug fixes and new releases.</p>
            <div className={'milestone-page-body'}>
                <MilestoneUtilityPage/>
                <MilestoneTextPage />
            </div>
        </div>
    }

}
