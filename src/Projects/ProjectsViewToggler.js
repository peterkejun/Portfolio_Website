import React from "react";
import grid from '../img/grid.svg';
import window from '../img/window.svg';
import grid_gray from '../img/grid_gray.svg';
import window_gray from '../img/window_gray.svg';
import './ProjectsViewToggler.css';

export class ProjectsViewToggler extends React.Component {

    render() {
        let grid_img_src, window_img_src;
        if (this.props.view_mode === 'grid') {
            grid_img_src = grid;
            window_img_src = window_gray;
        } else {
            grid_img_src = grid_gray;
            window_img_src = window;
        }

        return <div className={'container-fluid toggler'}>
            <h1 className={'toggler-title'}>View projects in</h1>
            <img className={'grid-image'} src={grid_img_src} alt={'grid'} onClick={this.props.onChangeMode.bind(this, 'grid')} />
            <img src={window_img_src} alt={'window'} onClick={this.props.onChangeMode.bind(this, 'window')} />
        </div>
    }

}
