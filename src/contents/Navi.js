import logo from './images/logo.png';
import './css/Navi.css';
import { Component } from "react";

class Navi extends Component {
    render() {
        return (
            <div className="Navi">
                <div id="logo">
                    <img 
                        src={logo} 
                        alt='logo'
                        width="300px"
                        height="300px"
                        id="logoImg"
                    />
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
                                <td colSpan="2" id="button"><input type="submit" value="Login" id="loginSubmit"/><input type="submit" value="Sign Up" id="loginSubmit"/></td>
                            </tr>
                        </table>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Navi;