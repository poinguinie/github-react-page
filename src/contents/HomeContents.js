import './css/HomeContents.css';
import React, { Component } from "react";
import $ from "jquery";

class HomeContents extends Component {
    constructor(props) {
        super(props);
        this.hoverBox = this.hoverBox.bind(this);
    }
    hoverBox(e) {
        var name = String(e.target.attributes.name.value);
        $("."+name).stop(false, false);
    }
    componentDidMount() {
        var mode = [-1,-1,-1,-1];
        var Profile = 42;
        var GoogleDrive = 45;
        var Board = 46;
        var Lab = 43;
        function moveProfile() {
            mode[0] *= -1;
            if (mode[0] === 1) {
                $(".Profile").animate({
                    left: "-="+(Profile*mode[0])+"%"
                 },2500,'swing',moveProfile);
            }
            else if (mode[0] === -1) {
                $(".Profile").animate({
                    left: "-="+(Profile*mode[0])+"%"
                 },2500,'swing',moveProfile);
            }
        }
        function moveGoogleDrive() {
            mode[1] *= -1;
            if (mode[1] === -1) {
                 $(".GoogleDrive").animate({
                    left: "+="+(GoogleDrive*mode[1])+"%"
                 },2500,'swing',moveGoogleDrive);
            }
            else if (mode[1] === 1) {
                 $(".GoogleDrive").animate({
                    left: "+="+(GoogleDrive*mode[1])+"%",
                 },2500,'swing',moveGoogleDrive);
            }
        }
        function moveBoard() {
            mode[2] *= -1;
            if (mode[2] === 1) {
                 $(".Board").animate({
                    left: "-="+(Board*mode[2])+"%"
                 },2500,'swing',moveBoard);
            }
            else if (mode[2] === -1) {
                 $(".Board").animate({
                    left: "-="+(Board*mode[2])+"%"
                 },2500,'swing',moveBoard);
            }
        }
        function moveLab() {
            mode[3] *= -1;
            if (mode[3] === -1) {
                 $(".Lab").animate({
                    left: "+="+(Lab*mode[3])+"%"
                 },2500,'swing',moveLab);
            }
            else if (mode[3] === 1) {
                 $(".Lab").animate({
                    left: "+="+(Lab*mode[3])+"%"
                 },2500,'swing',moveLab);
            }
        }
        function move() {
            moveProfile();
            moveGoogleDrive();
            moveBoard();
            moveLab();
        }
       $(function() {
            move();
        });
    }
    render() {
        return (
            <div className="HomeContents">
                <div 
                    className="Profile box" 
                    name="Profile" 
                    onMouseEnter={this.hoverBox}
                    onClick={function(e) {
                        e.preventDefault();
                        this.props.onModeChange('profile');
                    }.bind(this)}
                >
                    <p className="font" name="Profile">Profile</p>
                </div>
                <div 
                    className="GoogleDrive box" 
                    name="GoogleDrive" 
                    onMouseEnter={this.hoverBox}
                    onClick={function(e) {
                        e.preventDefault();
                        this.props.onModeChange('googleDrive');
                    }.bind(this)}
                >
                    <p className="font" name="GoogleDrive">Google Drive</p>
                </div>
                <div 
                    className="Board box" 
                    name="Board" 
                    onMouseEnter={this.hoverBox}
                    onClick={function(e) {
                        e.preventDefault();
                        this.props.onModeChange('board');
                    }.bind(this)}
                >
                    <p className="font" name="Board">Board</p>
                </div>
                <div 
                    className="Lab box" 
                    name="Lab" 
                    onMouseEnter={this.hoverBox}
                    onClick={function(e) {
                        e.preventDefault();
                        this.props.onModeChange('lab');
                    }.bind(this)}
                >
                    <p className="font" name="Lab">Lab</p>
                </div>
            </div>
        );
    }
}


export default HomeContents;