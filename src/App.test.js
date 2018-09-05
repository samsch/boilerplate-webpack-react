/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('The App component', () => {
  test('Should match a snapshot render', () => {
    const renderedApp = renderer.create(<App />);
    expect(renderedApp.toJSON()).toMatchSnapshot();
  });
});
