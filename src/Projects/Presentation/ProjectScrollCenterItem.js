import React from 'react';

export class ProjectScrollCenterItem extends React.Component {

    render() {
        const div_style = {
            height: '100%',
            paddingTop: '0%',
        };

        const h1_style = {
            color: 'white',
            fontWeight: '900',
            fontSize: '60px',
            textAlign: 'left',
            paddingTop: '5%',
        };

        const title_div_style = {
            height: '100%',
            paddingRight: '5%',
            display: 'flex',
            textAlign: 'left',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        };

        return <div style={div_style}>
            <div style={title_div_style}>
                <h1 style={h1_style}>{this.props.project.title}</h1>
            </div>
        </div>
    }

}
