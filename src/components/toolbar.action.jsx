import React, { PropTypes } from 'react';

const ToolBarAction = ({ name, className }) => (
  <div className="cmpt-addon">
   <div className="cmpt-addon-item"><i className={`fa fa-${className}`}></i></div>
   <span className="cmpt-addon-field">{name}</span>
  </div>
);
ToolBarAction.PropTypes = {
 name: PropTypes.string.isRequired,
 className: PropTypes.string.isRequired
}

export default ToolBarAction;

