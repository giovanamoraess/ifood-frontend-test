import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";
import { getPlaylists } from '../actions/playlists';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class ListPlaylists extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        const { token } = this.props; 
        this.props.getPlaylists(token);
        
        setInterval(async () => {
            await this.props.getPlaylists(token);
        }, 30000);
    }

    renderCards(playlists){
        if(playlists){
            return playlists.map((playlist) => {
                return (
                    <PlaylistCard infos={playlist}/>                
                );
            });
        }
        return null;
    }

    render() {
        const { playlists, filters } = this.props;
        const listPlaylists = filters && filters.length > 0 ? filters : playlists.items;
        
        return (
            <div className="list-playlist">
                <div className="list-playlist__body">
                    {this.renderCards(listPlaylists)}
                </div>
            </div>
        );
    }
}

ListPlaylists.propTypes = {
    getPlaylists: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
    playlists: store.playlistsReducer.playlists,
    filters: store.filtersReducer.playlists
});

export default connect(mapStateToProps, {getPlaylists})(ListPlaylists);