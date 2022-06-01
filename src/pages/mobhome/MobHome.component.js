import React, { Component } from "react";
import { throttle } from "lodash";
import socket from "../../utils/socket";
import "./mobhome.css";
const buttons = {
  0: "left",
  1: "right",
};

class MobHome extends Component {
  constructor(props) {
    super(props);
    this.lastX = null;
    this.lastY = null;
    this.timeOut = null;
    this.handleTouchMove = throttle(this.NhandleTouchMove, 10);
  }
  handleMouseEnter = ({ clientX, clientY }) => {
    this.lastX = clientX;
    this.lastY = clientY;
  };
  handleMouseMove = ({ clientX, clientY }) => {
    this.handleMouse(clientX, clientY);
  };
  handleMouse = (X, Y, scroll) => {
    const x = X - this.lastX;
    const y = Y - this.lastY;
    this.lastX = X;
    this.lastY = Y;
    socket.mouseMove({ x, y, scroll });
  };
  handleTouchStart = (event) => {
    event.persist();
    const touchPos = event.touches[0];
    this.lastX = touchPos.clientX;
    this.lastY = touchPos.clientY;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => event.preventDefault(), 100);
  };

  handleTouchEnd = () => {
    clearTimeout(this.timeOut);
  };
  NhandleTouchMove = (event) => {
    event.preventDefault();
    let touchPos = event.touches[0];
    const isScroll = event.touches.length > 1;
    this.handleMouse(touchPos.clientX, touchPos.clientY, isScroll);
  };
  handleClick = (event) => {
    socket.mouseClick({ button: buttons[event.button], double: false });
  };
  handleDoubleClick = (event) => {
    socket.mouseClick({ button: buttons[event.button], double: true });
  };
  handleClickBtn = (btn) => {
    socket.mouseClick({ button: btn, double: true });
  };

  // keyboard
  // handleKeyUp = (event) => {
  //   const { onType } = this.props;
  //   // event.preventDefault();
  //   const alt = event.altKey || false;
  //   const ctrl = event.ctrlKey || false;
  //   const shift = event.shiftKey || false;
  //   const meta = event.metaKey || false;
  //   const code = event.which || event.keyCode;
  //   const string = event.target.value;
  //   event.target.value = "";
  //   onType({ alt, ctrl, shift, meta, code, string });
  // };
  render() {
    return (
      <div className='home-container'>
        <div
          className='touch-container'
          onMouseEnter={this.handleMouseEnter}
          onMouseMove={this.handleMouseMove}
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
          onTouchMove={this.handleTouchMove}
          onDoubleClick={this.handleDoubleClick}
          onClick={this.handleClick}
          onKeyPressCapture={this.handleLongPress}
        >
          {/* <img width='50' height='50' alt='mouse' src='/img/mouse.png'></img> */}
        </div>
        <div className='buttons'>
          <button className='btn' onClick={() => this.handleClickBtn("left")}>
            Left
          </button>
          <button className='btn' onClick={() => this.handleClickBtn("right")}>
            Right
          </button>
        </div>
        {/* <div>
          <input
            // autoComplete='new-password'
            onKeyUp={this.handleKeyUp}
            // placeholder={String.fromCharCode(parseInt("e803", 16))}
            // type='password'
          />
        </div> */}
      </div>
    );
  }
}

export default MobHome;
