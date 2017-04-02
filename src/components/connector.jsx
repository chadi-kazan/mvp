import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
class Connector extends PureComponent {
 renderEmpty() {
  return (
    <div className="main-workarea">
      <h2 style={{ alignSelf: 'center' }}>Select a provider from the pane on the left to start</h2></div>
  );
 }
 render() {
  const { selectedProvider } = this.props;
  if (!selectedProvider) {
   return this.renderEmpty();
  }
  return (
   <div className="main-workarea">
      <div className="provider-title"><h1>{selectedProvider}</h1></div>
      <div><h4>Import Liked</h4></div>
      <div><h4>{`${selectedProvider} Music Pages`}</h4></div>
      <div><div className="fb-login-button" dataMaxRows="1" dataSize="small" dataShowFaces="false" dataAutoLogoutLink="false"></div></div>
    </div>
  );
 }
}
Connector.propTypes = {
 selectedProvider: PropTypes.string
}
export default connect(state => ({ selectedProvider: state.mvp.selectedProvider }))(Connector);

