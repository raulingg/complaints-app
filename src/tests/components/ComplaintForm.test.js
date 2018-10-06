import React from 'react';
import { shallow } from 'enzyme';
import { SingleDatePicker } from 'react-dates';
import ComplaintForm from '../../components/ComplaintForm';
import complaints from '../fixtures/complaints';
import moment from '../__mocks__/moment';

describe('RENDER', () => {
  test('should render ComplaintForm correctly', () => {
    const wrapper = shallow(<ComplaintForm />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ComplaintForm with complaint data', () => {
    const wrapper = shallow(<ComplaintForm complaint={complaints[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('EVENTS', () => {
  test('should set title state when the title input changes', () => {
    const value = 'New title';
    const wrapper = shallow(<ComplaintForm />);
    wrapper.find({ name: 'title' }).simulate('change', {
      target: { value },
    });
    expect(wrapper.state('title')).toBe(value);
  });

  test('should set reportTo state when the reportTo input changes', () => {
    const value = 'Angelica merina';
    const wrapper = shallow(<ComplaintForm />);
    wrapper.find({ name: 'reportTo' }).simulate('change', {
      target: { value },
    });
    expect(wrapper.state('reportTo')).toBe(value);
  });

  test('should set happenedAt state when the happenedAt input changes', () => {
    const now = moment();
    const wrapper = shallow(<ComplaintForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);

    expect(wrapper.state('happenedAt')).toEqual(now);
  });

  test('should set calendarFocused state when focusing on happenedAt input', () => {
    const focused = true;
    const wrapper = shallow(<ComplaintForm />);
    console.log(wrapper.find('SingleDatePicker'));
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
  });

  test('should call onSubmit function when form is submitted', () => {
    const onSubmitSpy = jest.fn();

    const complaintSubmitted = {
      title: 'This is my title',
      content: 'This is my content',
      happenedAt: 1578,
      reportTo: 'Marco alzamora',
    };
    const wrapper = shallow(
      <ComplaintForm complaint={complaintSubmitted} onSubmit={onSubmitSpy} />
    );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });
});
