import React, { Component } from 'react';
import PropTypes from "prop-types";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {Collapse} from 'react-collapse';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import { getFiltersValues } from '../actions/filters';
import { filterPlaylists } from '../actions/playlists';
import "react-datepicker/dist/react-datepicker.css";

import '../styles/Filters.sass';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Filters extends Component {
  constructor(props){
    super(props);

    this.state = {
      locale: null,
      country: null,
      timestamp: null, 
      limit: null, 
      offset: null,
      labelWidth: 0,
    };
  }
  

  handleChange = name => event => {
    this.setState({ [name]: event.target.value }, this.getPlaylistsFiltered);
  };

  handleChangeData(date) {
    this.setState({ timestamp: date }, this.getPlaylistsFiltered);
  }

  getPlaylistsFiltered() {
    const { locale, country, timestamp, limit, offset } = this.state;
    let data = timestamp ? moment(timestamp).format() : null;
    this.props.filterPlaylists(locale, country, data, limit, offset);
  }

  componentWillMount() {
    this.props.getFiltersValues();
  }

  renderLocale(options, classes) {
    return (
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelLocaleRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
          >
            {options.name}
          </InputLabel>
          <Select
            native
            value={this.state.locale ? this.state.locale : ''}
            onChange={this.handleChange('locale')}
            input={
              <OutlinedInput
                name="locale"
                labelWidth={this.state.labelWidth}
                id="outlined-age-native-simple"
              />
            }
          >
            <option value="" />
            <option value={options.values[0].name}>Inglês (AU)</option>
            <option value={options.values[1].name}>Alemão</option>
            <option value={options.values[2].name}>Portugês (BR)</option>
            <option value={options.values[3].name}>Francês</option>
            <option value={options.values[4].name}>Inglês (US)</option>
            <option value={options.values[5].name}>Espanhol</option>
          </Select>
        </FormControl>    
      </div>
    );
  }

  renderCountry(options, classes) {
    return (
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelCountryRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
          >
            {options.name}
          </InputLabel>
          <Select
            native
            value={this.state.country ? this.state.country : ''}
            onChange={this.handleChange('country')}
            input={
              <OutlinedInput
                name="country"
                labelWidth={this.state.labelWidth}
                id="outlined-age-native-simple"
              />
            }
          >
            <option value="" />
            <option value={options.values[0].value}>{options.values[0].name}</option>
            <option value={options.values[1].value}>{options.values[1].name}</option>
            <option value={options.values[2].value}>{options.values[2].name}</option>
            <option value={options.values[3].value}>{options.values[3].name}</option>
            <option value={options.values[4].value}>{options.values[4].name}</option>
            <option value={options.values[5].value}>{options.values[5].name}</option>
          </Select>
        </FormControl>    
      </div>
    );
  }

  renderData(options, classes) {
  return (
    <form className={classes.container} noValidate>
     <DatePicker
        selected={this.state.timestamp}
        onChange={(event) => this.handleChangeData(event)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd/MM/yyyy h:mm aa"
        timeCaption="time"
        placeholderText={options.name}
        className="datepicker"
      />
    </form>
  );
  }

  renderLimit(options) {
    return(
      <TextField
          id="standard-number"
          label={ options.name }
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          style={{width: '5rem'}}
          onChange={this.handleChange('limit')}
          value={this.state.limit ? this.state.limit : ''}
        />
    );
  }

  renderOffset(options) {
    return(
      <TextField
          id="standard-number"
          label={ options.name }
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          style={{width: '5rem'}}
          onChange={this.handleChange('offset')}
          value={this.state.offset ? this.state.offset : ''}
        />
    );
  }

  cleanFilters() {
    this.setState({
      locale: null, 
      country: null, 
      timestamp: null, 
      limit: null, 
      offset: null}, this.getPlaylistsFiltered);
    
  }

  renderCleanFilters(classes) {
    return (
      <Button variant="contained" className={classes.button} onClick={() => this.cleanFilters()}>
        Limpar
      </Button>
    )
  }

  render() {
    const { filters, classes } = this.props;
    if (filters) {
      return (
        <Collapse isOpened={this.props.visible}>
          <div className="div-filters" role="filters">
            {this.renderLocale(filters[0], classes)}
            {this.renderCountry(filters[1], classes)}
            {this.renderData(filters[2], classes)}
            {this.renderLimit(filters[3], classes)}
            {this.renderOffset(filters[4], classes)}
            {this.renderCleanFilters(classes)}
          </div>
        </Collapse>
      )
    }
    return null; 
  }
}

Filters.propTypes = {
  getFiltersValues: PropTypes.func.isRequired,
  filterPlaylists: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  filters: store.filtersReducer.filters,
});

export default connect(mapStateToProps, {getFiltersValues, filterPlaylists})(withStyles(styles)(Filters));
