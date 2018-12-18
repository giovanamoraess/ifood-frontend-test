import { PLAYLISTS_REQUEST, PLAYLISTS_SUCCESS, PLAYLISTS_FAILED, FILTERS_API } from '../constants/actionTypes';

const initialState = {
  playlists: ''
};

  export const playlistsReducer = (state = initialState, action) => {
    switch (action.type) {
      case PLAYLISTS_SUCCESS:
        return {
          ...state,
          playlists: action.data.playlists
        };
      case FILTERS_API:
      case PLAYLISTS_SUCCESS:
        return {
          ...state,
          playlists: action.data.playlists
        };
      default:
        return state;
    }
  };