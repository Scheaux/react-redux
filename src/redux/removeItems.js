import { REMOVE_ITEMS } from './actions';

function changeItems(id) {
  return {
    type: REMOVE_ITEMS,
    payload: id
  };
}

export default changeItems;
