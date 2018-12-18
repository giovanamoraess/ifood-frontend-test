import React, {Component} from 'react';
import Header from '../components/Header';
import ListPlaylists from './ListPlaylists';
import Login from '../components/Login';

var stateKey = 'spotify_auth_state';

class Authentication extends Component {

    render() {
        var params = this.getHashParams();
        var access_token = params.access_token;

        if (access_token) {
            localStorage.setItem('TOKEN', access_token);
            return( 
                <div className="home">
                    <Header />
                    <ListPlaylists token={access_token}/>
                </div>
            )
        }

        return (
            <Login url={this.authentication()}/>
        );
      }
      
    authentication() {
          var client_id = 'cb6dde22c6254077aecfc2456d052422';
          var redirect_uri = 'http://localhost:3000'; 
          var state = this.generateRandomString(16);
          
          localStorage.setItem(stateKey, state);
          var scope = 'user-read-private user-read-email';
          var url = 'https://accounts.spotify.com/authorize';
          url += '?response_type=token';
          url += '&client_id=' + encodeURIComponent(client_id);
          url += '&scope=' + encodeURIComponent(scope);
          url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
          url += '&state=' + encodeURIComponent(state);
      
          return url;
      }

    generateRandomString(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
      }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
}  


export default Authentication;
