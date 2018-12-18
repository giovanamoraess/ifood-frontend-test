import { FILTERS_VALUE_REQUEST, FILTERS_VALUE_SUCCESS, SEARCH_NAME_PLAYLIST } from '../constants/actionTypes';
import axios from "axios";

export function getFiltersValues() {
    return (dispatch) => {
        dispatch({
            type: FILTERS_VALUE_REQUEST,
        });
        return axios({
            method: 'get',
            url: 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
        }).then(({data}) => {
            dispatch({
                type: FILTERS_VALUE_SUCCESS,
                data: data
            })
        }).catch((error) => {
            if (error.response) {
                console.log("Error response from server:", error.response);
            } else if (error.request) {
                console.log("Could not reach server:", error.response);
            } else {
                console.log("Non request error happened:", error);
            }
        });
    }
}

export function searchNamePlaylist(playlists, text) {
    return {
        type: SEARCH_NAME_PLAYLIST,
        payload: {playlists, text}
    }
}
