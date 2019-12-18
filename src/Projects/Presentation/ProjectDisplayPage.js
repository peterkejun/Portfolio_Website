import React from 'react';
import mandarin_img from '../../img/mandarin.png';
import relative_bible_img from '../../img/relative_bible.png';
import pinyin_assistant_img from '../../img/pinyin_assistant.png';
import './ProjectDisplayPage.css';

export class ProjectDisplayPage extends React.Component {

    constructor(props) {
        super(props);
        this.previous_img = null;
    }

    unique_key() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    render() {

        const div_style = {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };

        let final_img = relative_bible_img;
        switch (this.props.selected_project_index) {
            case 0: final_img = relative_bible_img; break;
            case 1: final_img = relative_bible_img; break;
            case 2: final_img = mandarin_img; break;
            case 3: final_img = pinyin_assistant_img; break;
            default: final_img = mandarin_img;
        }
        let initial_img = this.previous_img == null ? final_img : this.previous_img;
        if (this.previous_img === final_img) {
            return <div style={div_style}>
                <img className={'initial-image'} src={initial_img} alt={'initial'} />
                <img className={'final-image'} src={final_img} alt={'final'} />
            </div>
        } else if (this.previous_img == null) {
            this.previous_img = final_img;
            return <div style={div_style}>
                <img key={this.unique_key()} className={'final-image'} src={final_img} alt={'final'} />
            </div>
        } else {
            this.previous_img = final_img;
            return <div style={div_style}>
                <img key={this.unique_key()} className={'initial-image'} src={initial_img} alt={'initial'} />
                <img key={this.unique_key()} className={'final-image'} src={final_img} alt={'final'} />
            </div>
        }
    }

}
