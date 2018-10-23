import React from 'react';
import { shallow } from 'enzyme';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import renderer from 'react-test-renderer';
import { Header } from '../../components/Header';
import { ButtonLink } from '../../styles/components/Buttons';

test('should render Header correctly with user authenticated', () => {
  const wrapper = renderer.create(
    <Router history={createMemoryHistory()}>
      <Header isAuthenticated />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly with user unauthenticated', () => {
  const wrapper = renderer.create(
    <Router history={createMemoryHistory()}>
      <Header isAuthenticated={false} />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click when user is authenticated', () => {
  const startLogout = jest.fn();
  const isAuthenticated = true;

  const wrapper = shallow(<Header startLogout={startLogout} isAuthenticated={isAuthenticated} />);
  wrapper.find(ButtonLink).simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
