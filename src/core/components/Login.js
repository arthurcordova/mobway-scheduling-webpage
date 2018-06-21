import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, emailLogin } from '../services/actions/userActions';
import logo from '../../assets/img/logo-agendai.png';

class Login extends Component {
    constructor(props) {
        super(props);
        //state
        this.state = {
          email: '',
          password: ''
        };
        //bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);      
      }
    
      handleChange(e) {
        this.setState({
          //Esse cara vai ser 'email' ou 'password'
          [e.target.name] : e.target.value
        });
      }

      emailLogin() {
        console.log(this.props);
      }
      

      handleSubmit(e) {
        this.props.emailLogin(this.state.email, this.state.password);
      }
      
    componentWillMount() {
        if (this.props.user !== null) {            
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== null) {
            nextProps.history.push('/');
        }
    }

    render() {
        return (            
            <div className="container">
                <div className="col-md-12">
                    <img src={logo} className="img-login" href="/" />
                    <form className="login">
                        <div className="input-group">                            
                                <i className="material-icons pink600">account_circle</i>
                                <input id="login-email" type="text" name="email" placeholder="email" onChange={this.handleChange} value={this.state.email} />                            
                        </div>
                        <div className="input-group">                        
                            <i className="material-icons pink600">lock</i>
                            <input id="password" name="password" type="password" placeholder="password" onChange={this.handleChange} value={this.state.password} />
                        </div>                        
                        <div className="row div-login">
                            <div className="col-sm-12">
                                <div>
                                    <span className="col-sm-4 btn-login" onClick={this.handleSubmit}>
                                        Entrar
                                    </span>
                                </div>
                                <div id="gSignInWrapper">
                                    <span class="label">Sign in with:</span>
                                    <div id="customBtn" className="customGPlusSignIn">
                                        <span className="icon"></span>
                                        <span className="buttonText" onClick={this.props.googleLogin}>Google</span>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>            
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        email: state.email,
        password: state.password
    };
}

export default connect(mapStateToProps, { googleLogin, emailLogin})(Login);