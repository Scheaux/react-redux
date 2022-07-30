import {
  combineReducers,
  compose,
  legacy_createStore
} from 'redux';

import itemsReducer from './itemsReducer';
import formReducer from './formReducer';
import filterReducer from './filterReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      items: itemsReducer,
      form: formReducer,
      filter: filterReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;
