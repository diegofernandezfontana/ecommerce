import {
  ADD_REVIEW,
  FETCH_ORDERS_USER,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_UP,
  FETCH_USER_PERFIL,
} from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        //reviews: action.
      };
    case FETCH_ORDERS_USER:
      return {};

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        /* loggedIn: true, */
        logged: action.user,
      });

    case LOGOUT:
      return Object.assign({}, state, {
        /* loggedIn: false, */
        user: action.user,
      });
    case FETCH_USER_PERFIL: {
      console.log({ action });
      return Object.assign({}, state, {
        user: action.user,
      });
    }

    case SIGN_UP:
      return {};

    default:
      return state;
  }
};
