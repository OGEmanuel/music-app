export const getToken = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  const token = data?.auth_token;

  return token;
};
