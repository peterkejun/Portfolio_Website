import React from "react";
import networking from '../../img/networking.svg';
import megaphone from '../../img/megaphone.svg';
import credit from '../../img/credit.svg';
import './FooterPage.css';

export class FooterPage extends React.Component {

    render() {
        return <div className={'footer-container'}>
            <div className={'footer-central-container'}>
                <div className={'footer-contact-container'}>
                    <div className={'network-container'}>
                        <img className={'footer-icon-img'} src={networking} alt={'networking'} />
                        <div className={'network-text-container'}>
                            <h1 className={'footer-contact-title'}>peter.ke@yahoo.com</h1>
                        </div>
                    </div>
                    <div className={'subscribe-container'}>
                        <img className={'footer-icon-img'} src={megaphone} alt={'megaphone'} />
                        <div className={'subscribe-text-container'}>
                            <h1 className={'subscribe-title'}>Stay tuned</h1>
                            <h2 className={'subscribe-subtitle'}>My latest releases and articles<br />sent straight to you every month</h2>
                            <form className={'subscribe-form'}>
                                <div className="form-group subscribe-form-group">
                                    <input type="email" className="form-control subscribe-form-control" id="exampleInputPassword1" placeholder="Enter an email" />
                                </div>
                                {/*<div className="form-group form-check">*/}
                                {/*    <input type="checkbox" className="form-check-input" id="exampleCheck1" />*/}
                                {/*        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>*/}
                                {/*</div>*/}
                                <button type="submit" className="btn btn-warning subscribe-button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={'container footer-credit-container'}>
                    <img src={credit} alt={'credit'} />
                    <div className={'container-fluid footer-credit-text-container'}>
                        <h1 className={'footer-credit-title'}>Credits</h1>
                        <table className={'footer-credit-table'}>
                            <tr>
                                <td>
                                     <a target={'_blank'} href="https://www.freepik.com/free-photos-vectors/paper">Paper vector created by slidesgo - www.freepik.com</a>
                                </td>
                                <td>
                                     <a target={'_blank'} href="https://www.freepik.com/free-photos-vectors/puzzle">Puzzle vector created by slidesgo - www.freepik.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <a target={'_blank'} href="https://www.freepik.com/free-photos-vectors/people">People vector created by slidesgo - www.freepik.com</a>
                                </td>
                                <td>
                                     <a target={'_blank'} href="https://www.freepik.com/free-photos-vectors/business">Business vector created by slidesgo - www.freepik.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     <a target={'_blank'} href="https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com</a>
                                </td>
                                <td>
                                     <a target={'_blank'} href="https://www.freepik.com/free-photos-vectors/illustration">Illustration vector created by slidesgo - www.freepik.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1>Icons made by  <a target={'_blank'} href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from  <a target={'_blank'} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></h1>
                                </td>
                                <td>
                                     <a target={'_blank'} href="https://www.freepik.com/free-photos-vectors/banner">Banner vector created by freepik - www.freepik.com</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }

}
