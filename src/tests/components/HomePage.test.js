import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../components/HomePage';
import complaints from '../fixtures/complaints';

describe('HomePage tests', () => {
  const startSetComplaintsSpy = jest.fn(() => Promise.resolve());
  const wrapper = shallow(<HomePage startSetComplaints={startSetComplaintsSpy} complaints={[]} />);
  wrapper.setState({ isLoading: false });

  test('should correctly render ComplaintsList with complaints', () => {
    wrapper.setProps({ complaints });
    expect(wrapper).toMatchSnapshot();
  });

  test('should correctly render ComplaintsList with no complaints', () => {
    wrapper.setState({ isLoading: false });
    wrapper.setProps({ complaints: [] });
    expect(wrapper).toMatchSnapshot();
  });

  test('should correctly render LoadingPage when isLoading is true', () => {
    wrapper.setState({ isLoading: true });
    wrapper.setProps({ complaints: [] });
    expect(wrapper).toMatchSnapshot();
  });
});
