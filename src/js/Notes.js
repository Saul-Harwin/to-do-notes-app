import React, { Component } from "react";
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';


class Notes extends Component {
    constructor(props) {
        super(props)      
    
        // this.props.deleteNote = this.props.deleteNote.bind(this)
        this.createNote = this.createNote.bind(this)
    }

    createNote(note){
        
        return <SwipeableListItem
            swipeLeft={{
                content: <div>Delete</div>,
                action: () => this.props.deleteNote(note.id)
            }}
            swipeRight={{
                content: <div>Edit</div>,
                action: () => console.log('swipe action triggered')
            }}
            onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
            >
            
            <div className="note" key={ note.id } information={ note.content }>
                <h1>{ note.title }</h1>
                <p>{ note.content}</p>
            </div>
        </SwipeableListItem>
    }

    render() {
        var noteEntries = this.props.entries;
        var Notes       = noteEntries.map(this.createNote);

        return (    
            <div className="my_notes">
                { Notes }
            </div>
        )
    }
}
export default Notes;