import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.sass';
import Button from '@material-ui/core/Button';

class Login extends Component {
    constructor(props){
      super(props);
    }

    render() {
        const { url } = this.props;
        return (
          <div className="div-container-login">
            <div className="div-login">
              <button className="button-login" onClick={() => this.goToLogin(url)} >
                  <text className="label-button">Fazer login com spotify</text>
              </button>   
            </div>
          </div>
        );
      }

  goToLogin(url) {
    window.location.href = url;
  }
      
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Login;
