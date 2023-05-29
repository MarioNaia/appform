const initialState = {
    toggle: false,
  };
  
  const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return {
          ...state,
          toggle: true,
        };
      default:
        return state;
    }
  };
  
  export default toggleReducer;