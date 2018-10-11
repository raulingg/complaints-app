import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../components/HomePage';
import complaints from '../fixtures/complaints';

test('should correctly render ComplaintsList with complaints', () => {
  const wrapper = shallow(<HomePage complaints={complaints} />);
  wrapper.setState({ isLoading: false });
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ComplaintsList with no complaints', () => {
  const wrapper = shallow(<HomePage complaints={[]} />);
  wrapper.setState({ isLoading: false });
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render LoadingPage when isLoading is true', () => {
  const wrapper = shallow(<HomePage complaints={[]} />);
  expect(wrapper).toMatchSnapshot();
});
