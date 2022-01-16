import {GET_TOKEN} from './actions';

type Tokens = {
  access_token?: string,
  created_at?: number,
  expires_in?: number,
  regresh_token?: string,
  token_type?: string,
};

type Actions = {
  type: string,
  payload: Tokens,
};

const initState: Tokens = {
  access_token: undefined,
  created_at: undefined,
  expires_in: undefined,
  regresh_token: undefined,
  token_type: undefined,
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
