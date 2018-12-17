import React, { Component } from 'react';
import '../styles/Cards.sass';

class PlaylistCard extends Component {
  render() {
      console.log('prosp carrd', this.props.infos);
      const { infos } = this.props; 
    return (
        <div className="playlist-card">
                <img className="playlist-card__bg" src={infos.images[0].url}/>
                <div className="playlist-card__content">
                    <div className="playlist-card__top">
                        <h2 className="playlist-card__subtitle playlist-card__subtitle--border"></h2>
                    </div>
                    <div className="playlist-card__bottom">
                        <div className="playlist-card__bottom-left">
                            <div className="playlist-card__title">
                        
                            </div>
                            <div className="playlist-card__subtitle" >
                            </div>
                        </div>
                        <div className="playlist-card__bottom-right">
                            <div className="playlist-card__people-icon">
                                <img className="icon-inside-btn"/>
                            </div>
                            <div className="playlist-card__people">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default PlaylistCard;
