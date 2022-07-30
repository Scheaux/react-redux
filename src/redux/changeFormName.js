import { CHANGE_FORM_NAME } from './actions';

function changeFormName(name) {
  return {
    type: CHANGE_FORM_NAME,
    payload: name
  };
}

export default changeFormName;
