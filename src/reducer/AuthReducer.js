export const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        ...state,
        status: 'authenticated',
        infoUser: action.payload,
      };
    case 'logout':
      return {
        ...state,
        status: 'not-authenticated',
        infoUser: {},
      };
    default:
      return state;
  }
};
