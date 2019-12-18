import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class ProjectSideListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
    }

    handleClick() {
        this.props.onSelect(this.props.index);
    }

    onMouseEnter() {
        this.setState({
            hover: true,
        })
    }

    onMouseLeave() {
        this.setState({
            hover: false,
        })
    }

    render() {
        let backgroundColor = 'transparent';
        if (this.props.selected) {
            backgroundColor = 'rgba(61, 19, 141, 0.15)';
        } else if (this.state.hover && this.props.highlight_on_hover) {
            backgroundColor = 'rgba(61, 19, 141, 0.05)';
        }
        const div_style = {
            padding: '23px 0 23px 28px',
            backgroundColor: backgroundColor,
            cursor: 'pointer',
        };

        const title_style = {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#3D138D',
            marginBottom: '10px',
        };

        const description_style = {
            fontSize: '20px',
            fontWeight: '300',
            color: '#3D138D',
            marginBottom: '4px',
        };

        const date_style = {
            fontSize: '20px',
            fontWeight: '300',
            color: 'rgba(0, 0, 0, 0.6)',
            marginTop: '4px',
        };

        const img_div_style = {
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            alignContent: 'stretch',
            alignItems: 'flex-start',
        };

        const img_style = {
            height: '31px',
            width: 'auto',
            paddingRight: '15px',
            marginTop: '15px',
        };

        return <div className={'container-fluid'} style={div_style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.handleClick.bind(this)}>
            <h1 style={title_style}>{this.props.project.title}</h1>
            <h1 style={description_style}>{this.props.project.description}</h1>
            <h1 style={date_style}>{this.props.project.date}</h1>
            <div style={img_div_style}>
                {
                    this.props.project.img_urls.map((img_url, i) =>
                        <a href={this.props.project.link_urls[i]} key={i}>
                            <img src={img_url} style={img_style} alt={'link'} />
                        </a>
                    )
                }
            </div>
        </div>
    }

}
