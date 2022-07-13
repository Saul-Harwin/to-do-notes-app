import React, { Component } from "react";
import ReactSwipe from "react-swipe";

import Notes     from "./Notes";
import Home      from "./Home";
import AddNote   from "./AddNote";
import BottomNav from "./BottomNav"
// import Projects from "Projects";
// import Settings from "Settings";

class PageSwipe extends Component {
    constructor(props) {
        super(props)      
        this.state = {
            Notes: [
                {
                    id: 12434738974103894787465784560450257464507864875602357604756230569356730564945,
                    title: "My first Note",
                    content: "You can delete my by swiping left on my then pressing the bin."
                }
            ]
        }
        this.createNote = this.createNote.bind(this)
        this.updateCurrent = this.updateCurrent.bind(this)
        this.genId   = this.genId.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
    };

    genId() {
        var id = []
        for (let i = 0; i < 100; i++) {
            id.push(Math.floor((Math.random() * 100) + 1));
        }
        id = id.join("");
        return id
    };

    deleteNote(id) {
        console.log(id)
        var index = this.state.Notes.findIndex(x => x.id ===id);
        console.log(index)
    }

    createNote() {
        this.setState( prevState => ({ Notes: [ ...prevState.Notes, { id: this.genId(), title: "", content: "" }] }))
    };
    
    updateCurrent(title, content) {
        var current     = (this.state.Notes[this.state.Notes.length - 1])
        var allnotes    = this.state.Notes
        current.title   = title 
        current.content = content 
        if ( title === '' ) { current.title = "Untitled" } 
        if ( content === '' ) { current.content = "No Content" }
        allnotes.splice(-1,1)
        allnotes.push(current)
        this.setState({ Notes: allnotes })
    };

    render() {
        let reactSwipeEl;
        return (
            <div>
                <div id="slider" className="swipe">
                    <div className="swipe-wrap">
                        <ReactSwipe className="carousel" swipeOptions={{ continuous: false }} ref={el => (reactSwipeEl = el)}>
                            {/* <Notes className="page notes"></Notes> */}
                            <Home entries={ this.state.Notes } deleteNote={ this.deleteNote }/>
                            {/* <Notes/> */}
                            {/* <Projects className="page projects"></Projects>  */}
                            {/* <Settings className="page settings"></Settings> */}
                        </ReactSwipe>
                    </div>
                </div>
                <AddNote updateCurrent = { this.updateCurrent }/>
                <BottomNav createNote = { this.createNote }/>
            </div>
        )
    }
}

export default PageSwipe;