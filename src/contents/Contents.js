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

        /*function move() {
            var top = Math.floor(Math.random() * 50) + 100;
            var bottom = Math.floor(Math.random() * 50) + 100;
            var left = Math.floor(Math.random() * 50) + 100;
            var right = Math.floor(Math.random() * 50) + 100;
             $(".Profile").animate({
                 top: "+="+top+"px",
                 left: "+="+left+"px"
             },1000,null);
             $(".GoogleDrive").animate({
                 bottom: "+="+bottom+"px",
                 left: "+="+left+"px"
             },1000,null);
             $(".Board").animate({
                 top: "+="+top+"px",
                 right: "+="+right+"px"
             },1000,null);
             $(".Lab").animate({
                 bottom: "+="+bottom+"px",
                 right: "+="+right+"px"
             },1000,null);
        }
       $(function() {
           //move();
        });*/
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