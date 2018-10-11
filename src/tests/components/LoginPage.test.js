import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', done => {
  const historySpy = {
    push: jest.fn(),
  };
  const startLoginSpy = jest.fn(() => Promise.resolve('done'));

  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} history={historySpy} />);
  wrapper.find('button').simulate('click');
  expect(startLoginSpy).toHaveBeenCalledTimes(1);
  // expect(historySpy.push).toHaveBeenCalledTimes(1);
  done();
});
