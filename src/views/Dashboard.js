import React, { Component } from "react";
import TopNav from "../components/topNav/topNav";
import Sidebar from "../components/sidebar/Sidebar";
import "../App.css";



export default class Dashboard extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        <TopNav />
       
        <div className="container">
        
          <Sidebar />
          {this.props.children}
            <Sidebar />
        </div>
      </div>
    );
  }
}
