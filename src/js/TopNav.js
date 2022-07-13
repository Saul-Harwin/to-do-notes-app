import React, { Component } from "react";

class TopNav extends Component {
    render() {
        return (
            <div className="Top_Nav">
                <input type="text" className="search_notes" placeholder="Search notes"></input>
                <div className="settings_icon"></div>
            </div>
        )
    }
}

export default TopNav;