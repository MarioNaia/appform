import { UPDATE_FORM } from '../actions/actions';

// Initial state
const initialState = {
  formData: '',
  isRegisterOn: false
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        formData: action.payload,
        isRegisterOn: true,
      };
    default:
      return state;
  }
};

export default reducer;