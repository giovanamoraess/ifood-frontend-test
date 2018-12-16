import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import Reducers from '../reducers';

export const store = createStore(Reducers, applyMiddleware(thunk));