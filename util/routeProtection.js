import { redirect } from 'react-router-dom';
import { getToken } from './getToken';

export const checkAuthLoader = () => {
  const loggedIn = getToken();

  if (!loggedIn) {
    return redirect('/');
  }

  return null;
};
