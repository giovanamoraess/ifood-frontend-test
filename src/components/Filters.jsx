import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

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

export default class Filters extends Component {
  
  renderLocale() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="outlined-age-simple"
            className="bg-color"
          >
            Local
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
            className="bg-color"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> 
      </div>
    );
  }

  renderCountry() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="outlined-age-simple"
            className="bg-color"
          >
            Local
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
            className="bg-color"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> 
      </div>
    );
  }

  renderData() {
  return (
    <form noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
  }

  renderLimit() {
    return(
      <TextField
          id="standard-number"
          label="Limite"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
    );
  }

  renderPage() {
    return(
      <TextField
          id="standard-number"
          label="Página"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
    );
  }
  
  render() {
    return (
      <div className="div-filters">
        {this.renderLocale()}
        {this.renderCountry()}
        {this.renderData()}
        {this.renderLimit()}
        {this.renderPage()}
      </div>
    )
  }
    
}


Filters.propTypes = {
  classes: PropTypes.object.isRequired,
};