import React, { PureComponent, PropTypes } from 'react';
import ToolBarAction from './toolbar.action';

export default class Toolbar extends PureComponent {
 render() {
  const { progress } = this.props;
  return (
    <ul className="list-inline">
     <li>
      <ul className="list-inline">
       <li><div className="pgrs-container">
        <div className="pgrs-bar" style={{width: progress}}></div>
        </div>
       </li>
       <li><i className="fa fa-gift"></i> </li>
      </ul>
     </li>
     <li>JAMTRACK</li>
     <li className="action-group">
       <div className="cmpt-addon">
        <div className="cmpt-addon-item"><i className="fa fa-dashboard"></i></div>
        <span className="cmpt-addon-field">Dashboard</span>
       </div>
     </li>
     <li className="action-group">
       <ToolBarAction name="Manage Feed" className="feed" />
     </li>
     </ul>
  );
 }
}
Toolbar.propTypes = {
  progress: PropTypes.number
};

