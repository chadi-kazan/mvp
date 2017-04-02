import React, { Component } from 'react';
import SideBar from './sidebar';
import ToolBar from './toolbar.jsx';
import Connector from './connector';

export default class MVP extends Component {
 render() {
  return (
   <div className="viewport">
    <div className="viewport-content">
     <div className="toolbar">
      <ToolBar />
     </div>
     <div className="app-container">
      <div className="sidebar">
       <SideBar />
      </div>
      <div className="workarea">
       <Connector />
      </div>
     </div>
    </div>
   </div> 
  );
 }
}

