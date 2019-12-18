import React from "react";
import contact_top from "../../img/contact_top.svg";
import './ContactImagePage.css';

export class ContactImagePage extends React.Component {

    render() {
        const div_style = {
            display: 'flex',
            alignItems: 'center',
        };

        const h2_style = {
            fontWeight: 'bold',
            fontSize: '24px',
            color: '#444444',
        };

        const h1_style = {
            fontWeight: 'bold',
            fontSize: '50px',
            color: '#444444',
        };

        const text_div_style = {
            zIndex: '2',
            position: 'absolute',
        };

        const img_style = {
            zIndex: '1',
        };

        return <div style={div_style}>
            <div className={'col-lg-6 col-md-6 col-sm-12 offset-md-1'} style={text_div_style}>
                <h2 style={h2_style}>A piece of advice?</h2>
                <h1 style={h1_style}>GET IN TOUCH!</h1>
                <button type={"button"} className={'btn btn-outline-primary col-sm-6 col-md-6 col-lg-6'}>Send me an email</button>
            </div>
            <img className={'img-fluid'} src={contact_top} style={img_style} alt={'contact top'} />
        </div>
    }

}
