import React from 'react';
import { mount, render } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = render(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

describe('should call startLogin and history push when clicking login button', () => {
  const historySpy = {
    push: jest.fn(),
  };
  const startLoginSpy = jest.fn(() => Promise.resolve('done'));

  const component = mount(<LoginPage startLogin={startLoginSpy} history={historySpy} />);
  component.find('button[data-provider="google"]').simulate('click');

  test('should call history push with root page', () => {
    expect(historySpy.push).toHaveBeenCalledWith('/');
  });

  test('should call startLogin with google provider', done => {
    expect(startLoginSpy).toHaveBeenCalledWith('google');
    done();
  });

  component.find('button[data-provider="facebook"]').simulate('click');

  test('should call startLogin with facebook provider', done => {
    expect(startLoginSpy).toHaveBeenCalledWith('facebook');
    done();
  });

  component.unmount();
});
