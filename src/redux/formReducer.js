import { CHANGE_FORM_ID, CHANGE_FORM_NAME, CHANGE_FORM_PRICE } from './actions';

const initialState = {
  name: '',
  price: '',
  id: ''
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_NAME:
      return {
        ...state,
        name: action.payload
      };

    case CHANGE_FORM_PRICE:
      return {
        ...state,
        price: action.payload
      };

    case CHANGE_FORM_ID:
      return {
        ...state,
        id: action.payload
      };

    default:
      return state;
  }
};

export default formReducer;
