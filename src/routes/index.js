import Facebook from '../providers/facebook';
import DummyComponent from '../providers/other';

export const routes = [
 {
  path: '/',
  exact: true
 },
 {
  path: '/facebook',
  component: Facebook
 },
 {
  path: '/other',
  component: DummyComponent
 }
];

