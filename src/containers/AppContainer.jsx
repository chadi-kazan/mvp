import React, { Component, PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import SideBar from '../components/sidebar';
import ToolBar from '../components/toolbar';
import Connector from '../components/connector';
import Facebook from '../providers/facebook';
import DummyComponent from '../providers/other';
import Privacy from '../components/Privacy';

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
            <Switch>
              <Route path='/privacy' component={null} />        
              <Route path='/' component={ToolBar} />
              <Route path='/:provider' component={ToolBar} />      
            </Switch>
          </div>
          <div className="app-container">
           <div className="sidebar">
             <Switch>
              <Route path='/privacy' component={null} />
              <Route path='/' component={SideBar} />        
              <Route path='/:provider' component={SideBar} />
            </Switch>        
           </div>
           <div className="workarea">
            <Switch>        
              <Route exact={true} path='/' component={Connector} />
              <Route path="/privacy" exact={true} component={Privacy} />        
              <Route path='/facebook' component={Facebook} />
              <Route path='/other' exact={true} component={DummyComponent} /> 
            </Switch>          
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
