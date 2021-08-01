const accountReducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return state + parseInt(action.payload);
    case "withdraw":
      return state - parseInt(action.payload);
    default:
      return state;
  }
};

export default accountReducer;
