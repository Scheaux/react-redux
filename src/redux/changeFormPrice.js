import { CHANGE_FORM_PRICE } from './actions';

function changeFormPrice(price) {
  return {
    type: CHANGE_FORM_PRICE,
    payload: price
  };
}

export default changeFormPrice;