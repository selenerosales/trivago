import React from 'react';
import ReactDOM from 'react-dom';
import PrincipalContent from './PrincipalContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrincipalContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
