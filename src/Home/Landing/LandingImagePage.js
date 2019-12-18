import React from 'react';
import landing_image from '../../img/landing_isometric.svg';

export class LandingImagePage extends React.Component {

    render() {
        const div_style = {
            width: '50%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        };

        const img_style = {
            maxWidth: '100%',
            height: 'auto',
        };

        return <div style={div_style}>
            <img src={landing_image} style={img_style} alt={'landing'}/>
        </div>
    }

}
