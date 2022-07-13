import React, { Component } from "react";

class BottomNav extends Component {
    constructor(props) {
        super(props);

        // this.updateCurrent = this.updateCurrent.bind(this);
        this.overlayUp = this.overlayUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    overlayUp() {
        var element = document.getElementById('add_note')
        element.classList.add('overlay_up');
    }

    handleClick() {
        this.overlayUp();
        var t=setTimeout(this.props.createNote,1000);
    }

    render() {
        return (
            <div className="bottom_nav">
                <div className="add_button" onClick={ this.handleClick }>
                    <div className="plus"></div>
                </div>
            </div>
        )
    }
};

export default BottomNav;