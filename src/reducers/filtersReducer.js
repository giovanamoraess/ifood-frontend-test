import { FILTERS_VALUE_REQUEST, FILTERS_VALUE_SUCCESS } from '../constants/actionTypes';

const initialState = {
  filters: ''
};

  export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTERS_VALUE_SUCCESS:
        return {
          ...state,
          filters: action.data.filters
        };
      default:
        return state;
    }
  };