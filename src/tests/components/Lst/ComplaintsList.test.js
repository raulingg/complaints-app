import React from 'react';
import { shallow } from 'enzyme';
import { ComplaintsList } from '../../../components/List/ComplaintsList';
import complaints from '../../fixtures/complaints';

test('should correctly render ComplaintsList', () => {
  const wrapper = shallow(<ComplaintsList complaints={complaints} />);
  expect(wrapper).toMatchSnapshot();
});
