const url = 'https://demo.spreecommerce.org';
const authUrl = '/spree_oauth/token';

export const getToken = async (password: string, username: string) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'password',
      username,
      password,
    }),
  };

  const response = await fetch(`${url}${authUrl}`, config);
  return await response.json();
};
