import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";


class ListsPlaylists extends Component {
    constructor(props){
        super(props);
    }

    renderCards(playlists){
        if(playlists){
            // return playlists.map((playlist) => {
                return (
                    <PlaylistCard />
                );
            // });
        }
        return null;
    }

    render() {
        return (
            <div className="list-playlist">
                <div className="list-playlist__body">
                    {this.renderCards('teste')}
                </div>
            </div>
        );
    }

}

ListsPlaylists.propTypes = {
    
};

export default (ListsPlaylists);
