import React from "react";
import './ProjectDisplayPage.css';
import {ProjectItem2} from "./ProjectItem2";
import menu from "../../../img/menu.svg";
import home from "../../../img/home.svg";
import close from '../../../img/close.svg';
import  { Link } from 'react-router-dom';
import './ProjectNavBar.css';
import './ProjectSideBar.css';
import './ProjectLightBox.css';

export class ProjectDisplayPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.display_ref = React.createRef();
        this.state = {
            show_side_bar: window.innerWidth >= 768,
            lightbox_img_url: null,
        };
        window.addEventListener('resize', this.resize.bind(this));
        this.previous_size = window.innerWidth >= 768 ? 'l' : 's';
    }

    menu() {
        if (this.display_ref.current.getBoundingClientRect().width >= 768) return;
        this.setState( {
            show_side_bar: true,
            lightbox_img_url: this.state.lightbox_img_url,
        })
    }

    resize() {
        const current_size = window.innerWidth >= 768 ? 'l' : 's';
        if (this.previous_size === current_size) return;
        this.previous_size = current_size;
        if (window.innerWidth >= 768) {
            this.setState({
                show_side_bar: true,
                lightbox_img_url: this.state.lightbox_img_url,
            })
        } else {
            this.setState({
                show_side_bar: false,
                lightbox_img_url: this.state.lightbox_img_url,
            })
        }
    }

    close() {
        this.setState({
            show_side_bar: false,
            lightbox_img_url: this.state.lightbox_img_url,
        })
    }

    display_lightbox(img_url) {
        this.enable_scroll(false);
        this.setState({
            show_side_bar: this.state.show_side_bar,
            lightbox_img_url: img_url,
        })
    }

    close_lightbox() {
        this.enable_scroll(true);
        this.setState({
            show_side_bar: this.state.show_side_bar,
            lightbox_img_url: null,
        })
    }

    enable_scroll(flag) {
        if (flag) {
            window.removeEventListener('scroll', this.on_scroll);
        } else {
            this.no_scroll_y_offset = window.pageYOffset;
            window.addEventListener('scroll', this.on_scroll);
        }
    }

    on_scroll() {
        window.scrollTo(window.pageXOffset, this.no_scroll_y_offset);
    }

    render() {
        const sidebar_style = {
            display: window.innerWidth >= 768 ? 'flex' : (this.state.show_side_bar ? 'flex' : 'none'),
        };
        const lightbox_style = {
            display: this.state.lightbox_img_url == null ? 'none' : 'flex',
        };
        return (
            <div className={'project-display-container'} ref={this.display_ref}>
                <div className={'project-nav-container'}>
                    <input className={'nav-img menu-img'} type={'image'} src={menu} onClick={this.menu.bind(this)} />
                    {/*<img className={'nav-img menu-img'} src={menu} alt={'menu'} onClick={this.menu.bind(this)} />*/}
                    <Link to={'/'}>
                        <img className={'nav-img home-img'} src={home} alt={'home'} />
                    </Link>
                </div>
                <div className={'col-md-3 offset-md-9 col-sm-6 offset-sm-6 col-10 offset-2 project-sidebar-container'} ref={this.props.child_ref} style={sidebar_style}>
                    <input className={'close-img nav-img'} type={'image'} src={close} onClick={this.close.bind(this)} />
                    <div className={'float-sidebar-container'}>
                        {
                            this.props.projects.map((project, i) =>
                                <div className={'project-item'} key={i} >
                                    <h1 className={'project-title'}>{project.title}</h1>
                                    <div className={'badge badge-pill'}>{project.type}</div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={'col-md-9 col-xs-12 project-display-page-container'} ref={this.props.child_ref}>
                    {
                        this.props.projects.map((project, i) =>
                            <ProjectItem2 project={project} key={i} display_lightbox={this.display_lightbox.bind(this)} />
                        )
                    }
                </div>
                <div className={'lightbox-container'} style={lightbox_style}>
                    <div className={'lightbox-close-container'}>
                        <img className={'lightbox-close-img'} src={close} alt={'close'} onClick={this.close_lightbox.bind(this)} />
                    </div>
                    <div className={'lightbox-img-container'}>
                        <img className={'lightbox-img'} src={this.state.lightbox_img_url} alt={'lightbox'} />
                    </div>
                </div>
            </div>
        );
    }

}
