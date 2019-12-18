import React from 'react';
import {ProjectScrollTopBottomItem} from "./ProjectScrollTopBottomItem";

export class ProjectsScrollTopPage extends React.Component {

    constructor(props) {
        super(props);
        this.scroll_div_ref = React.createRef();
        this.sample_item_ref = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.sample_item_ref.current == null) return;
        const bounding_rect = this.sample_item_ref.current.getBoundingClientRect();
        this.scroll_div_ref.current.scrollTo(0, (30 + bounding_rect.height) * (this.props.final));
    }

    render() {
        const div_style = {
            height: '35%',
            width: '100%',
            position: 'relative',
        };

        const projects_div_style = {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            overflow: 'scroll',
            scrollBehavior: 'smooth',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: '1',
        };

        const gradient_style = {
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(rgb(239, 238, 241, 1.0), rgba(239, 238, 241, 0))',
            zIndex: '2',
            overflow: 'hidden',
            position: 'absolute',
        };

        const dummy_h1_style = {
            color: 'transparent',
        };

        return <div style={div_style}>
            <div style={gradient_style}>
                <h1 style={dummy_h1_style}>dummy</h1>
            </div>
            <div style={projects_div_style} ref={this.scroll_div_ref}>
                {
                    this.props.projects.map((project, i) =>
                        <ProjectScrollTopBottomItem key={i} dummy={true} marginPosition={'bottom'}/>
                    )
                }
                {
                    this.props.projects.map((project, i) =>
                        <ProjectScrollTopBottomItem project={project} key={i} div_ref={i === 0 ? this.sample_item_ref : null} dummy={false} marginPosition={'bottom'}/>
                    )
                }
            </div>
        </div>
    }

}
