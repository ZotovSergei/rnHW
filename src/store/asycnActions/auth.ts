import {actionTokenCreator} from '../tokenReducer';

const url = 'https://demo.spreecommerce.org';
const authUrl = '/spree_oauth/token';

export const getToken = (
  password: string,
  username: string,
  transitionToHome: () => void
) => {
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
  return (dispatch) => {
    fetch(`${url}${authUrl}`, config)
      .then((response) => response.json())
      .then((json) => {
        dispatch(actionTokenCreator(json));
        return json.access_token;
      })
      .then((token) => {
        if (token) {
          transitionToHome();
        }
      });
  };
};
