import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.sass';
import logo from '../assets/logo-spotifood.png';

class Login extends Component {
    constructor(props){
      super(props);
    }

    render() {
        const { url } = this.props;
        return (
          <div className="div-container-login">
            <div className="div-login">
              <img src={logo} className="img-logo-login"/>
              <text className="text-login"> Acesse sua conta spotify para ter acesso às Playlists preferidas dos clientes iFood</text>
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
