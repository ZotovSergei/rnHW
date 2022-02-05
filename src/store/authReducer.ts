import {GET_TOKEN} from './actions';

export type Tokens = {
  access_token?: string,
  created_at?: number,
  expires_in?: number,
  refresh_token?: string,
  token_type?: string,
  error?: string | null,
  error_description?: string | null,
};

type Actions = {
  type: string,
  payload: Tokens,
};

const initState: Tokens = {
  access_token: undefined,
  created_at: undefined,
  expires_in: undefined,
  refresh_token: undefined,
  token_type: undefined,
  error_description: null,
  error: null,
};

const reducer = (state = initState, action: Actions) => {
  switch (action.type) {
    case GET_TOKEN:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export const actionTokenCreator = (payload: Tokens) => ({
  type: GET_TOKEN,
  payload,
});

export default reducer;
