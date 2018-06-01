import { createStore } from 'redux';

import reducer from './ducks/reducer';
//create store

let store = createStore(reducer);

export default store;