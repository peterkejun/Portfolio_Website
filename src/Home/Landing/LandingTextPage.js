import React from 'react';

export class LandingTextPage extends React.Component {

    render() {
        const div_style = {
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
        };

        const div_inside_style = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginRight: '15%',
        };

        const h1_style = {
            marginBottom: '0',
            fontWeight: 'bold',
            fontSize: '114px',
            color: '#444444',
        };

        const hr_style = {
            width: '100%',
            borderColor: 'rgba(144, 96, 235, 0.3)',
        };

        const p_style = {
            fontSize: '34px',
            fontWeight: 'normal',
            color: '#777777',
        };

        return <div style={div_style}>
            <div style={div_inside_style}>
                <h1 style={h1_style}>Peter Ke</h1>
                <hr style={hr_style}></hr>
                <p style={p_style}>Welcome to my home page.<br></br>Feel free to look around!</p>
            </div>
        </div>
    }

}
