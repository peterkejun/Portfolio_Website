import React from 'react';
import right_arrow from "../../img/right_arrow.svg";
import {ProjectScrollCenterItem} from "./ProjectScrollCenterItem";

export class ProjectsScrollCenterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updated: false,

        };
        this.scroll_div_ref = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scroll_div_ref.current.scrollTo(0, this.props.final * this.scroll_div_ref.current.getBoundingClientRect().height);
    }

    render() {
        const div_style = {
            width: '100%',
            height: '30%',
            backgroundColor: '#3D138D',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        };

        const scroll_div_style = {
            overflow: 'scroll',
            height: '100%',
            scrollBehavior: 'smooth',
            userSelect: 'none',
            pointerEvents: 'none',
        };

        const arrow_div_style = {
            maxWidth: '80px',
            minWidth: '56px',
            height: '100%',
            margin: '0',
            padding: '0',
            display: 'flex',
            alignItems: 'flex-end',
        };

        const dark_img_div_style = {
            backgroundColor: '#2C1160',
            width: '100%',
            height: '57px',
            margin: '0',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        };

        return <div style={div_style}>
            <div className={'col-sm-6'} style={scroll_div_style} ref={this.scroll_div_ref}>
                {
                    this.props.projects.map((project, i) =>
                        <ProjectScrollCenterItem key={i} project={project}/>
                    )
                }
            </div>
            <div className={'col-sm-1'} style={arrow_div_style}>
                <div style={dark_img_div_style}>
                    <img src={right_arrow} alt={'right arrow'} />
                </div>
            </div>
        </div>
    }

}
