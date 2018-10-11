import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    user: {
      uid: 'abc123',
      displayName: 'Raul Quispe',
      email: 'myemail@gmail.com',
      photoURL: 'https://myphoto-url.com',
      emailVerified: true,
    },
  };
  const state = authReducer({}, action);
  expect(state.user).toBe(action.user);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({ user: { uid: 'anything' } }, action);
  expect(state).toEqual({});
});
