import React from 'react';
import { shallow } from 'enzyme';
import { ComplaintPage } from '../../components/ComplaintPage';
import complaints from '../fixtures/complaints';

test('should correctly render ComplaintPage', () => {
  const complaint = complaints[1];
  const wrapper = shallow(<ComplaintPage complaint={complaint} />);
  expect(wrapper).toMatchSnapshot();
});
