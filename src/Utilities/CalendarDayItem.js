import React from 'react';

export class CalendarDayItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover_highlight: false,
        };
    }

    clicked() {
        if (this.props.valid) {
            this.props.onSelect();
        }
    }

    onMouseEnter() {
        if (this.props.valid) {
            this.setState({
                hover_highlight: true,
            });
        }
    }

    onMouseLeave() {
        if (this.props.valid) {
            this.setState({
                hover_highlight: false,
            });
        }
    }

    render() {
        let backgroundColor = 'white';
        let boxShadow = 'none';
        if (this.props.selected) {
            backgroundColor = '#4A1E96';
            boxShadow = '0px 0px 5px 0px rgba(10,10,10,0.3)';
        } else if (this.state.hover_highlight) {
            backgroundColor = 'rgba(73, 30, 150, 0.3)';
        }
        const div_style = {
            backgroundColor: backgroundColor,
            boxShadow: boxShadow,
            paddingTop: '5px',
            paddingBottom: '5px',
            borderRadius: '4px',
        };

        let color = '#999999';
        if (this.props.valid) {
            color = this.props.selected ? 'white' : '#444444';
        }
        const h1_style = {
            color: color,
            fontSize: '14px',
            cursor: this.props.valid ? 'pointer' : 'default',
            margin: '0',
        };

        return <div style={div_style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
            <h1 style={h1_style} onClick={this.clicked.bind(this)}>{this.props.day}</h1>
        </div>
    }

}
