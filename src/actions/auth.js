import { auth, facebookAuthProvider, googleAuthProvider } from '../firebase/firebase';

export const login = ({
  uid,
  displayName = '',
  email = '',
  photoURL = '',
  emailVerified = true,
}) => ({
  type: 'LOGIN',
  user: {
    uid,
    displayName,
    email,
    photoURL,
    emailVerified,
  },
});

export const startLogin = providerName => () => {
  switch (providerName) {
    case 'facebook':
      return auth.signInWithPopup(facebookAuthProvider);
    case 'google':
      return auth.signInWithPopup(googleAuthProvider);
    default:
      return auth.signInWithPopup(googleAuthProvider);
  }
};

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => () => auth.signOut();
