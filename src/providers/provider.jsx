import React from 'react';
import Facebook from './facebook';

const repository = new Map();

const generator = (name, connectProvider) => {
 if (repository.has(name)) {
  return repository.get(name);
 } else {
  switch (name) {
   case 'Facebook':
    const component = <Facebook connectProvider={connectProvider} />;
    repository.set(name, component);
    return component;
   default:
    return <div />; 
  }
 }
};
export default generator;
