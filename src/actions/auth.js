import { auth, googleAuthProvider } from '../firebase/firebase';

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

export const startLogin = () => () => auth.signInWithPopup(googleAuthProvider);

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => () => auth.signOut();
