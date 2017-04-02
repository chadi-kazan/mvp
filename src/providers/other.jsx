import React, { PureComponent } from 'react';

export default class DummyComponent extends PureComponent {

 render() {
  console.table(this.props);
  return (
   <div />
  );
 }
}
