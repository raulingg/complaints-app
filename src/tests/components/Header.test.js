import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} isAuthenticated />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click when user is authenticated', () => {
  const startLogout = jest.fn();
  const isAuthenticated = true;

  const wrapper = shallow(<Header startLogout={startLogout} isAuthenticated={isAuthenticated} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
