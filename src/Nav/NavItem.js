import React from 'react';

export class NavItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highlight: false,
        }
    }

    toggle_hover() {
        this.setState({
            highlight: !this.state.highlight,
        });
    }

    render() {
        const div_style = {
            left: '0',
            right: '0',
            marginRight: '15%',
            marginLeft: '15%',
            borderRadius: '4px',
            transition: 'margin-bottom 0.2s ease-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        };

        const title_style = {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#3D138D',
            textAlign: 'center',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingBottom: '6px',
            paddingTop: '10px',
            textDecoration: 'none',
            marginBottom: '0',
            marginTop: '0',
        };

        const inner_div_style = {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
        };

        const hr_style = {
            margin: '0',
            border: '0',
            backgroundColor: '#3D138D',
            paddingLeft: '0',
            paddingRight: this.state.highlight ? '100%' : '0',
            height: '2px',
            transitionDuration: '0.3s',
        };

        return <div style={div_style} onMouseEnter={this.toggle_hover.bind(this)} onMouseLeave={this.toggle_hover.bind(this)} onClick={this.props.onSwitchRoute.bind(this)}>
            <h1 style={title_style}>{this.props.title}</h1>
            <div style={inner_div_style}>
                <hr style={hr_style}></hr>
            </div>
        </div>
    }

}
