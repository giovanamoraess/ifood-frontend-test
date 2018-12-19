import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import FilterListIcon from '@material-ui/icons/FilterList';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Filters from './Filters';
import { connect } from 'react-redux';
import { searchNamePlaylist } from '../actions/filters';
import logo from '../assets/logo-spotifood.png';


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      filtersVisible: false,
      search: ''
    }
  }

  setFiltersVisible(visible) {
    this.setState({filtersVisible: visible})
  }

  renderFilters(visible) {
    return (
      <Filters visible={visible} />
    )
  }

  searchName(value) {
    const { playlists } = this.props;
    this.setState({search: value})
    this.props.searchNamePlaylist(playlists.items, value);
  }

  render() {
      const { filtersVisible } = this.state;
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <AppBar position="static" color="inherit" role="Appbar">
            <Toolbar>
              <div className={classes.title} variant="h6" color="inherit">
                <img src={logo} alt="logo" style={{width: '9rem'}}/>
              </div>
              <div className={classes.grow} />
              <div className="filter-icon" role="icon filters">
              <IconButton onClick={() => this.setFiltersVisible(!filtersVisible)}>
                <FilterListIcon />
              </IconButton>
              </div>
              <div className={classes.search}>
                <div className={classes.searchIcon} role="search">
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Buscar..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  value={this.state.search}
                  onChange={(event) => this.searchName(event.target.value)}
                />
              </div>
            </Toolbar>
          </AppBar>
          {this.renderFilters(filtersVisible)}
        </div>
      );
    }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  searchNamePlaylist: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  playlists: store.playlistsReducer.playlists
});

export default connect(mapStateToProps, {searchNamePlaylist})(withStyles(styles)(Header));
