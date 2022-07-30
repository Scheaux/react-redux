import { CHANGE_FORM_ID } from './actions';

function changeFormId(id) {
  return {
    type: CHANGE_FORM_ID,
    payload: id
  };
}

export default changeFormId;