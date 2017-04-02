import React, { PureComponent, PropTypes } from 'react';

export default class BaseProvider extends PureComponent {

 initConnection() {

 }

 render() {
  return (
   <div />
  );
 }
}

BaseProvider.propTypes = {
 connectToProvider: PropTypes.func.isRequired,
 name
};
