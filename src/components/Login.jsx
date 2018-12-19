import React, {Component} from 'react';
import '../styles/Login.sass';
import logo from '../assets/logo-spotifood.png';

class Login extends Component {

    render() {
        const { url } = this.props;
        return (
          <div className="div-container-login" role="modal login">
            <div className="div-login">
              <img src={logo} className="img-logo-login" alt="logo"/>
              <text className="text-login"> Acesse sua conta spotify para ter acesso às Playlists preferidas dos clientes iFood</text>
              <button className="button-login" onClick={() => this.goToLogin(url)} role="login with spotify" >
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

export default Login;
