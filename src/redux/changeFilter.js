import { CHANGE_FILTER } from './actions';

function changeFilter(value) {
  return {
    type: CHANGE_FILTER,
    payload: value
  };
}

export default changeFilter;
