import React from 'react';
import { shallow } from 'enzyme';
import { ComplaintForm } from '../../components/ComplaintForm';
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

  test('should set content state when the content input changes', () => {
    const value = 'New content';
    const wrapper = shallow(<ComplaintForm />);
    wrapper.find({ name: 'content' }).simulate('change', {
      target: { value },
    });
    expect(wrapper.state('content')).toBe(value);
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
    const value = '2018-12-31';
    const wrapper = shallow(<ComplaintForm />);
    wrapper.find({ name: 'happenedAt' }).simulate('change', {
      target: { value },
    });
    expect(wrapper.state('happenedAt')).toBe(value);
  });

  test('should call startAddComplaint action and history function when form is submitted', () => {
    const startAddComplaintSpy = jest.fn();
    const historySpy = {
      push: jest.fn(),
    };

    const wrapper = shallow(
      <ComplaintForm
        complaint={complaints[0]}
        startAddComplaint={startAddComplaintSpy}
        history={historySpy}
      />
    );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(startAddComplaintSpy).toHaveBeenCalledWith({
      title: complaints[0].title,
      content: complaints[0].content,
      reportTo: complaints[0].reportTo,
      happenedAt: moment(complaints[0].happenedAt),
    });
    expect(historySpy.push).toHaveBeenCalledTimes(1);
  });
});
