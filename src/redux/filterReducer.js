import { CHANGE_FILTER } from './actions';

const initialState = {
  value: ''
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        value: action.payload
      };

    default:
      return state;
  }
};

export default filterReducer;