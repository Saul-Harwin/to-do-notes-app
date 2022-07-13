import React, { Component } from "react";
import Notes from "./Notes"
// import DailyAgenda from "./DailyAgenda";

class Home extends Component {
    constructor(props) {
        super(props)
        // this.props.deleteNote = this.props.deleteNote.bind(props)
    }
    // createNote(note){
    //     return <div className="note" key={ note.id } information={ note.content }>
    //         <h1>{ note.title }</h1>
    //         <p>{ note.content}</p>
    //     </div>
    // }

    render() {
        // var noteEntries = this.props.entries;
        // var Notes       = noteEntries.map(this.createNote);
        
        return (
            <div className="home page">
                <div className="welcome">
                    <h1>Rise and Shine, Saul.</h1>
                    <p>You have things to do.</p>
                </div>
                {/* <DailyAgenda/> */}
                {/* <div className="my_notes"> */}
                    {/* { Notes } */}
                    <Notes entries={ this.props.entries } deleteNote={this.props.deleteNote} />
                {/* </div> */}
            </div>
        )
    }
}

export default Home;