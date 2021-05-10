import {combineReducers} from 'redux';
import {cartReducer} from '../redux/cartReducer';

const rootReducer = combineReducers({

    cart:cartReducer

});

export default rootReducer;