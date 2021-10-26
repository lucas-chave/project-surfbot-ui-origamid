export const VALUE_CHILD = 'VALUE_CHILD';
export const VALUE_ADULT = 'VALUE_ADULT';
export const VALUE_PROFESSIONAL = 'VALUE_PROFESSIONAL';

export function changeChild(payload) {
  return {
    type: VALUE_CHILD,
    payload,
  };
}

export function changeAdult(payload) {
  return {
    type: VALUE_ADULT,
    payload,
  };
}

export function changeProfessional(payload) {
  return {
    type: VALUE_PROFESSIONAL,
    payload,
  };
}
