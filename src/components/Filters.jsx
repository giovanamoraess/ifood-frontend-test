import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { getFiltersValues } from '../actions/filters';

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Filters extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.getFiltersValues();
  }

  renderLocale(options) {
    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="outlined-age-simple"
          >
            {options.name}
          </InputLabel>
          <Select
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em> </em>
            </MenuItem>
            <MenuItem value={10}>{options.values[0].name}</MenuItem>
            <MenuItem value={20}>{options.values[1].name}</MenuItem>
            <MenuItem value={30}>{options.values[2].name}</MenuItem>
            <MenuItem value={40}>{options.values[3].name}</MenuItem>
            <MenuItem value={50}>{options.values[4].name}</MenuItem>
            <MenuItem value={60}>{options.values[5].name}</MenuItem>
          </Select>
        </FormControl> 
      </div>
    );
  }

  renderCountry(options) {
    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="outlined-age-simple"
          >
            { options.name }
          </InputLabel>
          <Select
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em> </em>
            </MenuItem>
            <MenuItem value={10}>{options.values[0].name}</MenuItem>
            <MenuItem value={20}>{options.values[1].name}</MenuItem>
            <MenuItem value={30}>{options.values[2].name}</MenuItem>
            <MenuItem value={40}>{options.values[3].name}</MenuItem>
            <MenuItem value={50}>{options.values[4].name}</MenuItem>
            <MenuItem value={60}>{options.values[5].name}</MenuItem>
          </Select>
        </FormControl> 
      </div>
    );
  }

  renderData(options) {
  return (
    <form noValidate>
      <TextField
        id="datetime-local"
        label={ options.name }
        type="datetime-local"
        defaultValue=" "
        InputLabelProps={{
          shrink: true,
        }}
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
        />
    );
  }

  renderPage(options) {
    return(
      <TextField
          id="standard-number"
          label={ options.name }
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    );
  }

  render() {
    const { filters } = this.props;
    if (filters) {
      return (
        <div className="div-filters">
          {this.renderLocale(filters[0])}
          {this.renderCountry(filters[1])}
          {this.renderData(filters[2])}
          {this.renderLimit(filters[3])}
          {this.renderPage(filters[4])}
        </div>
      )
    }
    return null; 
  }
}

Filters.propTypes = {
  getFiltersValues: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  filters: store.filtersReducer.filters
});

export default connect(mapStateToProps, {getFiltersValues})(Filters);
