import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import blog from './images/tistory.svg';
import './css/Footer.css';
import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Content">
                    <div className="Contact">
                        Contact : Facebook (
                            <img 
                                src={facebook} 
                                width="10px" 
                                height="10px" 
                                alt="facebook"
                                className="facebookImg contactImg"
                            />), 
                        Twitter(
                            <img 
                                src={twitter} 
                                width="10px" 
                                height="10px" 
                                alt="Twiiter"
                                className="twitterImg contactImg"
                            />), 
                        <a 
                            href="https://csexy-1365.tistory.com/" 
                            className="page" 
                            id="blog" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Blog (
                                <img 
                                    src={blog} 
                                    width="10px" 
                                    height="10px" 
                                    alt="tistory blog"
                                    className="tistoryImg contactImg"
                                />)
                        </a>
                    </div>
                    <div className="Administer">Administer : Poinguinie</div>
                </div>
            </div>
        );
    }
}


export default Footer;