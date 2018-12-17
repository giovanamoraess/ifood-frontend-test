import React, { Component } from 'react';
import '../styles/Cards.sass';

class PlaylistCard extends Component {
  render() {
      const { infos } = this.props; 
    return (
        <div className="playlist-card" onClick={() => this.goToSpotify(infos.external_urls.spotify)}>
            <img className="playlist-card__bg" src={infos.images[0].url}/>
            <div className="playlist-card__content">
                <div className="playlist-card__bottom">
                    ouça no spotify
                </div>
            </div>
        </div>
    );
  }

  goToSpotify(url) {
    window.location.href = url;
  }
}

export default PlaylistCard;
