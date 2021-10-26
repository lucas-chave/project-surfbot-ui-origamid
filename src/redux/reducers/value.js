const INITIAL_STATE = {
  state: 49
};

function reducerValue(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'VALUE_CHILD':
      return { state: 49 };
    case 'VALUE_ADULT':
      return { state: 59 };
    case 'VALUE_PROFESSIONAL':
      return { state: 69 };
    default:
      return state;
  };
}

export default reducerValue;
