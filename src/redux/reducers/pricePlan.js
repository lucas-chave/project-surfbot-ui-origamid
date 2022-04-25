const INITIAL_STATE = {
  pricePlan: 49
};

function pricePlan(pricePlan = INITIAL_STATE, action) {
  switch (action.type) {
    case 'VALUE_CHILD':
      return { pricePlan: 49 };
    case 'VALUE_ADULT':
      return { pricePlan: 59 };
    case 'VALUE_PROFESSIONAL':
      return { pricePlan: 69 };
    default:
      return pricePlan;
  };
}

export default pricePlan;
