import {createStore} from 'redux';
import reducer from '../reducers/mainReducer';

// connecting store to recducers;
let store = createStore(reducer);

export default store;