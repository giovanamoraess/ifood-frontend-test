import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Login extends Component {
    constructor(props){
      super(props);
    }

    render() {
        const { url } = this.props;
        return (
          <Button variant="contained" color="secondary" href={url}>
              LOGAR
          </Button>   
        );
      }
      
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Login;
