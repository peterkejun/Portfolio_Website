import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import collaboration_img from '../../img/collaboration.svg';
import resume_img from '../../img/resume.svg';
import support_img from '../../img/support.svg';

export class ContactOptionsItem extends React.Component {

    render() {
        let img_src;
        let title;
        let content;
        switch (this.props.item) {
            case 'collaboration': {
                img_src = collaboration_img;
                title = 'Start a collaboration project';
                content = 'paragraph large Tumeric dreamcatcher brunch, godard portland asymmetrical etsy hexagon seitan trust fund.';
                break;
            }
            case 'resume': {
                img_src = resume_img;
                title = 'Have a look at my resume';
                content = 'paragraph large Tumeric dreamcatcher brunch, godard portland asymmetrical etsy hexagon seitan trust fund.';
                break;
            }
            case 'support': {
                img_src = support_img;
                title = 'Ask questions on CS';
                content = 'paragraph large Tumeric dreamcatcher brunch, godard portland asymmetrical etsy hexagon seitan trust fund.';
                break;
            }
            default: img_src = null;
        }

        const card_style = {
            border: 'none',
        };

        const img_style = {
            margin: '5%',
        };

        const title_style = {
            fontWeight: 'bold',
            fontSize: '26px',
            color: '#444444',
        };

        const paragraph_style = {
            fontWeight: '300',
            fontSize: '22px',
            color: '#777777',
        };

        return <div className={'card'} style={card_style}>
            <img className={'card-image-top'} src={img_src} style={img_style} alt={'not found for item' + this.props.item} />
            <div className={'card-body'}>
                <h1 className={'card-title'} style={title_style}>{title}</h1>
                <p className={'card-text'} style={paragraph_style}>{content}</p>
            </div>
        </div>
    }

}
