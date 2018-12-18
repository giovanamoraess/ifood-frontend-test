import { PLAYLISTS_REQUEST, PLAYLISTS_SUCCESS, FILTERS_API } from '../constants/actionTypes';
import axios from "axios";

export function getPlaylists(token) {
    return (dispatch) => {
        dispatch({
            type: PLAYLISTS_REQUEST,
        });
        return axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/browse/featured-playlists',
            headers: { 
                'Content-Type':'multipart/form-data',
                'Authorization':`Bearer ${token}`
            }
        }).then(({data}) => {
            dispatch({
                type: PLAYLISTS_SUCCESS,
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

export function filterPlaylists(locale, country, date=null, limit=null, page=null) {
    var token = localStorage.getItem('TOKEN');

    return (dispatch) => {
        // dispatch({
        //     type: FILTERS_API,
        // });
        return axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/browse/featured-playlists',
            headers: { 
                'Content-Type':'multipart/form-data',
                'Authorization':`Bearer ${token}`
            },
            params: {
                locale: locale,
                country: country,
                timestamp: date, 
                limit: limit,
                offset: page
            }
        }).then(({data}) => {
            dispatch({
                type: FILTERS_API,
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
