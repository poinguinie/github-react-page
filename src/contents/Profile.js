import './css/Profile.css';
import profileImg from './images/profile.gif';
import portfoloiImg1 from './images/portfolio1.jpg';
import portfoloiImg2 from './images/portfolio2.jpg';
import portfoloiImg3 from './images/portfolio3.jpg';
import portfoloiImg4 from './images/portfolio4.jpg';
import { Component } from "react";

class ProfileContent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            portfolioMenu : 0,
            portfolioImgs : [portfoloiImg1, portfoloiImg2, portfoloiImg3, portfoloiImg4]
        });
    }
    render() {
        return (
            <div className="ProfileContent">
                <div className="Profile1">
                    <div className="ProfileLogo">
                        <img 
                        src={profileImg} 
                        alt="profileImage"
                        id="profileImg"
                        width="300px"
                        height="300px"
                        />
                        <p id="logoAlt">Poinguinie</p>
                    </div>
                    <div className="ProfileInfo">
                        <div class="List">
                            <table id="profileList">
                                <tr>
                                    <td class="first elmt">NickName</td>
                                    <td class="elmt">Poinguinie</td>
                                </tr>
                                <tr>
                                    <td class="first elmt">Job</td>
                                    <td class="elmt">Student</td>
                                </tr>
                                <tr>
                                    <td class="first elmt">School</td>
                                    <td class="elmt">SCH University</td>
                                </tr>
                                <tr>
                                    <td class="first elmt">Grade</td>
                                    <td class="elmt">3rd</td>
                                </tr>
                                <tr>
                                    <td class="first elmt">Github</td>
                                    <td class="elmt"><a href="https://poinguinie.github.io" target="blank" className="link">Link</a></td>
                                </tr>
                                <tr>
                                    <td class="first elmt">Velog</td>
                                    <td class="elmt"><a href="https://velog.io/@poinguinie" target="blank" className="link">Link</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div><hr/>
                <div className="ProfileTable">
                    <div className="Portfolio">
                        <div className="PortfolioTitle">
                            <p id="Ptitle">Portfolio</p>
                        </div>
                        <div className="PortfolioContents">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProfileContent;