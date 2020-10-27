function reducer(state, action) {
  switch (action.type) {
    case 'INC_COUNTER':
      state.counter = state.counter + 1;
      return {...state};
    case 'DEC_COUNTER':
      state.counter = state.counter - 1;
      return {...state};
    // return {...state, counter: state.counter  -1}
    case 'SET_USERNAME':
      state.userName = action.payload.newUserName;
      return {...state};
    default:
      return state;
  }
}

export {reducer};
