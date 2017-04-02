import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import SideBar from '../components/sidebar';
import ToolBar from '../components/toolbar';
import Connector from '../components/connector';
import Facebook from '../providers/facebook';
import DummyComponent from '../providers/other';

class AppContainer extends Component {
  static propTypes = {
    history : PropTypes.object,
    store  : PropTypes.object
  }


  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
        <ConnectedRouter history={this.props.history}>
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
            <Route exact={true} path='/' />
            <Route path='/facebook' component={Facebook} />
            <Route path='/other' component={DummyComponent} />
           </div>
          </div>
         </div>
        </div>
        </ConnectedRouter>
        </div>
      </Provider>
    )
  }
}

export default AppContainer;
