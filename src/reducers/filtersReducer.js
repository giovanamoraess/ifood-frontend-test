import { FILTERS_VALUE_SUCCESS, 
         SEARCH_NAME_PLAYLIST
        } from '../constants/actionTypes';

const initialState = {
  filters: ''
};


  export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTERS_VALUE_SUCCESS:
      {
        return {
          ...state,
          filters: action.data.filters
        };
      }
      case SEARCH_NAME_PLAYLIST: {
        let newList = [];
        action.payload.playlists.filter( function (elem, index, array) {
          let existText = elem.name.toUpperCase().includes(action.payload.text.toUpperCase());
          if (existText) { 
            newList.push(elem);
          }
        }, {});
        return {
          ...state,
          playlists: newList
        }
      }
      default:
        return state;
    }
  }