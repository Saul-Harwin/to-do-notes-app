import React, { Component } from "react";

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Untitled",
            content: "no content",
            id: ""
        };
        this.saveNote = this.saveNote.bind(this);
        this.overlayDown = this.overlayDown.bind(this)
        this.clear = this.clear.bind(this);
        this.handleClick= this.handleClick.bind(this);
    }

    saveNote() {
        var title   = document.getElementsByClassName("enter_title")[0].value
        var content = document.getElementsByClassName("add_content")[0].getElementsByTagName("p")[0].innerHTML.slice(0,-4)
        this.props.updateCurrent(title, content)
    };

    overlayDown() {
        var element = document.getElementById('add_note')
        element.classList.remove('overlay_up');
    }

    clear() {
        document.getElementsByClassName("enter_title")[0].value = ''
        document.getElementsByClassName("add_content")[0].getElementsByTagName("p")[0].innerHTML = '<br/>'
    }

    handleClick() {
        this.saveNote();
        this.overlayDown();
        this.clear();
    }

    render() {
        return (
            <div id="add_note">
                <div className="handle" onClick={ this.handleClick }>
                    <div className="bar"></div>
                </div>
                <h1>Quick Note</h1>
                <input className="enter_title" placeholder={ 'Enter Title' } onKeyUp={ this.saveNote }></input>
                <div className="add_content">
                    <p contentEditable="true" onKeyUp={ this.saveNote }><br/></p>
                </div>
                <div className="schedule">
                    <p>Schedule</p>
                    <div className="switch">
                        <p>ON</p>
                        <div className="slider"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNote;