import {actionTokenCreator} from '../authReducer';

const url = 'https://demo.spreecommerce.org';
const authUrl = '/spree_oauth/token';

export const getToken = ({
  password,
  username,
}: {
  password?: string,
  username?: string,
}) => {
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
    return fetch(`${url}${authUrl}`, config)
      .then((response) => response.json())
      .then((json) => {
        dispatch(actionTokenCreator(json));
        return json;
      })
      .then((json) => {
        // console.log(json);
        return json;
        // if (json.error) {
        //   return json;
        // }
        // if (json.access_token) {
        //   transitionToHome();
        // }
      })
      .catch((e) => {
        console.log(e);
        return;
      });
  };
};
