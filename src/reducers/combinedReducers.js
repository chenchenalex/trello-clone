import {combineReducers} from 'redux';
import {createBoardReducer} from './boardReducers';

const AppReducers = combineReducers({
  boards: createBoardReducer
});

export default AppReducers;