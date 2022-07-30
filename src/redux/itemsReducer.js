import { CHANGE_ITEMS, EDIT_ITEM, REMOVE_ITEMS } from './actions';

const initialState = {
  items: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case REMOVE_ITEMS:
      return {
        ...state,
        items: [...state.items.filter(x => x.id !== action.payload)]
      };

    case EDIT_ITEM:
      Object.assign(state.items.find(x => x.id === action.payload.id), action.payload);
      return {
        ...state
      };

    default:
      return state;
  }
};

export default itemsReducer;
