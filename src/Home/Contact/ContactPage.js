import React from "react";
import resume from '../../img/resume.svg';
import question from '../../img/question.svg';
import idea from '../../img/idea.svg';
import './ContatctPage.css';

export class ContactPage extends React.Component {

    render() {
        return <div className={'contact-container'}>
            <h1 className={'section-title contact-title'}>Get in touch</h1>
            <div className={'contact-card-container'}>
                <div className={'card contact-card'}>
                    <img className={'contact-icon-img'} src={idea} alt={'idea'} />
                    <h1 className={'contact-subtitle'}>Collaborate on a project</h1>
                    <p className={'contact-paragraph'}>Have an idea in mind? Dont’ let it pass away! I am willing to help you convert it into a product as a team.</p>
                </div>
                <div className={'card contact-card'}>
                    <img className={'contact-icon-img'} src={resume} alt={'resume'} />
                    <h1 className={'contact-subtitle'}>Have a look at my resume</h1>
                    <p className={'contact-paragraph'}>Although a freshman in university, I am ready to take on responsibility, engage in teamwork, and get the job done in a working environment.</p>
                </div>
                <div className={'card contact-card'}>
                    <img className={'contact-icon-img'} src={question} alt={'question'} />
                    <h1 className={'contact-subtitle'}>Ask me questions</h1>
                    <p className={'contact-paragraph'}>Feel free to ask me about university, computer technologies, or anything that comes to mind. My information might be useful to you.</p>
                </div>
            </div>
        </div>
    }

}
