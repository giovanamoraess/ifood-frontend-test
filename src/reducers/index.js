import { filtersReducer } from './filtersReducer';
import { playlistsReducer } from './playlistsReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filtersReducer,
    playlistsReducer
});

export default rootReducer;


