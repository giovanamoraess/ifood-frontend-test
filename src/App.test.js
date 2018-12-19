import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Authentication from './components/Authentication';
import Login from './components/Login';
import PlaylistCard from './components/PlaylistCard';

const mockInfos = {
    "collaborative" : false,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWYcDQ1hSjOpY"
    },
    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWYcDQ1hSjOpY",
    "id" : "37i9dQZF1DWYcDQ1hSjOpY",
    "images" : [ {
      "height" : null,
      "url" : "https://pl.scdn.co/images/pl/default/ff0412251a8e8d5702baba4867e003a68de77417",
      "width" : null
    } ],
    "name" : "Deep Sleep",
    "owner" : {
      "display_name" : "Spotify",
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "primary_color" : null,
    "public" : null,
    "snapshot_id" : "MTU0NDAwNjE1MiwwMDAwMDAyNzAwMDAwMTY3N2RmMDMxMTMwMDAwMDE2MmYyYjBlOGQ4",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWYcDQ1hSjOpY/tracks",
      "total" : 73
    },
    "type" : "playlist",
    "uri" : "spotify:user:spotify:playlist:37i9dQZF1DWYcDQ1hSjOpY"
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders authentication', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Authentication />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders login', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login url="https://google.com" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders cards playlist', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlaylistCard infos={mockInfos} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
