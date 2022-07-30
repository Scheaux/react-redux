import { CHANGE_ITEMS } from './actions';

function changeItems(items) {
  return {
    type: CHANGE_ITEMS,
    payload: items
  };
}

export default changeItems;
