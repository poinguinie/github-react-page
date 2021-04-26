import closeButton from './images/close-button.svg';
import openButton from './images/open-button.svg';
import logo from './images/logo.png';
import './css/Navi.css';
import { Component } from "react";

class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isOpen : true
        });
        this.modeChange = this.modeChange.bind(this);
    }
    modeChange(e) {
        var _contents;
        console.log(this.state.isOpen);
        if(this.state.isOpen) {
            _contents = <div className="Navi">
                            <div className="close">
                                <img 
                                    src={closeButton} 
                                    alt='closeButton'
                                    width="50px"
                                    height="50px"
                                    id="closeImg"
                                    onClick={function(e) {
                                        e.preventDefault();
                                        this.props.closeMenu();
                                    }.bind(this)}
                                />
                            </div>
                            <div id="logo">
                                <a href="/">
                                    <img 
                                        src={logo} 
                                        alt='logo'
                                        width="300px"
                                        height="300px"
                                        id="logoImg"
                                    />
                                </a>
                            </div>
                            <div className="loginForm">
                                <form action="/process/login" method="post" className="login">
                                    <table className="loginTable"> 
                                        <tr id="row">
                                            <td><label for="id"><p id="loginFont">ID </p></label></td>
                                            <td><input type="text" name="id" id="id"/></td>
                                        </tr>
                                        <tr id="row">
                                            <td><label for="pwd"><p id="loginFont">Password </p></label></td>
                                            <td><input type="password" name="pwd" id="pwd"/></td>
                                        </tr>
                                        <tr id="row">
                                            <td colSpan="2" id="button"><input type="submit" value="Login" id="loginSubmit"/><input type="submit" value="Sign Up" id="signUpSubmit"/></td>
                                        </tr>
                                    </table>
                                    
                                </form>
                            </div>
                        </div>
        }
        else {
            _contents = <img 
                            src={openButton} 
                            alt='openButton'
                            width="50px"
                            height="50px"
                            id="openImg"
                            onClick={function(e) {
                                e.preventDefault();
                                var _isOpen = this.state.isOpen;
                                this.setState({
                                    isOpen : !(_isOpen)
                                });
                            }.bind(this)}
                        />
        }
        return _contents;
    }
    render() {
        return (
            <div className="Navi">
                {this.modeChange()}
            </div>
        );
    }
}

export default Navi;