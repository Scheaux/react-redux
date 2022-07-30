import { EDIT_ITEM } from './actions';

function editItem(form) {
  return {
    type: EDIT_ITEM,
    payload: { name: form.name, price: form.price, id: form.id },
  };
}

export default editItem;