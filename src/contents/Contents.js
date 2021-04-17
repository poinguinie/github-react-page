import './css/Contents.css';
import React, { Component } from "react";
//import { useRef } from "react";
import $ from "jquery";

class Contents extends Component {
    constructor(props) {
        super(props);
        this.hoverBox = this.hoverBox.bind(this);
    }
    hoverBox(e) {
        var name = String(e.target.attributes.name.value);
        $("."+name).stop(true, false);
    }
    iscollapse(x1,y1,x2,y2,r1,r2) {
       return ((Math.abs(x1 - x2) ** 2) + (Math.abs(y1 - y2) ** 2) <= r1 + r2)
    }
    isWallCollapse(e) {
        
    }
    componentDidMount() {
        var mode = 1;
        var Profile = 42;
        var GoogleDrive = 45;
        var Board = 46;
        var Lab = 43;
        function move() {
            if (mode === 1) {
                mode *= -1;
                $(".Profile").animate({
                    left: "+="+(Profile*(mode))+"%"
                 },2500,'swing');
                 $(".GoogleDrive").animate({
                    left: "+="+(GoogleDrive*(mode*-1))+"%"
                 },2500,'swing');
                 $(".Board").animate({
                    left: "+="+(Board*(mode))+"%"
                 },2500,'swing');
                 $(".Lab").animate({
                    left: "+="+(Lab*(mode*-1))+"%"
                 },2500,'swing',move);
            }
            else if (mode === -1) {
                mode *= -1;
                $(".Profile").animate({
                    left: "+="+(Profile*(mode))+"%"
                 },2500,'swing');
                 $(".GoogleDrive").animate({
                    left: "+="+(GoogleDrive*(mode*-1))+"%",
                 },2500,'swing');
                 $(".Board").animate({
                    left: "+="+(Board*(mode))+"%"
                 },2500,'swing');
                 $(".Lab").animate({
                    left: "+="+(Lab*(mode*-1))+"%"
                 },2500,'swing',move);
            }
        }
       $(function() {
           move();
        });
    }
    render() {
        return (
            <div className="Contents"
                onMouseMove={this.mousemove}>
                <div 
                    className="Profile box" 
                    name="Profile" 
                    onMouseEnter={this.hoverBox}
                    onDragStart={this.dragStart}
                    onDragEnd={this.dragEnd}
                >
                    <p className="font" name="Profile">Profile</p>
                </div>
                <div className="GoogleDrive box" name="GoogleDrive" onMouseEnter={this.hoverBox}>
                    <p className="font" name="GoogleDrive">Google Drive</p>
                </div>
                <div className="Board box" name="Board" onMouseEnter={this.hoverBox}>
                    <p className="font" name="Board">Board</p>
                </div>
                <div className="Lab box" name="Lab" onMouseEnter={this.hoverBox}>
                    <p className="font" name="Lab">Lab</p>
                </div>
            </div>
        );
    }
}


export default Contents;