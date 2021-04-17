import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import blog from './images/tistory.svg';
import github from './images/github.svg';
import './css/Footer.css';
import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Content">
                    <div className="Contact">
                        Contact : Facebook (<img src={facebook} width="10px" height="10px" alt="tistory blog"/>), 
                        Twitter(<img src={twitter} width="10px" height="10px" alt="tistory blog"/>), 
                        <a href="https://csexy-1365.tistory.com/" class="page" id="blog">Blog (<img src={blog} width="10px" height="10px" alt="tistory blog"/>)</a>, 
                        <a href="poinguinie.github.io" class="page" id="github">Github(<img src={github} width="15px" height="15px" alt="github"/>)</a>
                    </div>
                    <div className="Administer">Administer : Poinguinie</div>
                </div>
            </div>
        );
    }
}


export default Footer;