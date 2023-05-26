// Action types
export const UPDATE_FORM = 'UPDATE_FORM';

// Action creators
export const updateForm = (data) => {
  return {
    type: UPDATE_FORM,
    payload: data
  };
};