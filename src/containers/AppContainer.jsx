import React, { Component, PropTypes } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SideBar from '../components/sidebar';
import ToolBar from '../components/toolbar';

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object,
    store  : PropTypes.object
  }


  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
       <BrowserRouter>
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
           </div>
          </div>
         </div>
        </div>
        </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default AppContainer;
