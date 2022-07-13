import React from "react";
import ReactDOM from "react-dom";
import TopNav from "./js/TopNav";
// import BottomNav from "./js/BottomNav";
import PageSwipe from "./js/PageSwipe";
import "./css/index.css";

var destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <TopNav/>
        <PageSwipe/>
    </>,
    destination
    );