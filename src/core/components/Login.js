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
                                <i className="material-icons orange600">account_circle</i>
                                <input id="login-email" type="text" name="email" placeholder="email" onChange={this.handleChange} value={this.state.email} />                            
                        </div>
                        <div className="input-group">                        
                            <i className="material-icons orange600">lock</i>
                            <input id="password" name="password" type="password" placeholder="password" onChange={this.handleChange} value={this.state.password} />
                        </div>                        
                        <div className="row">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-danger col-sm-3" onClick={this.props.googleLogin}>
                                    Login with Google
                                </button>                    
                                <button type="button" className="btn btn-google col-sm-9" onClick={this.handleSubmit}>
                                    Login with E-mail
                                </button>                    
                            </div>
                        </div>
                    </form>
                </div>
            </div>            
        )
    }
}

function renderButton() {
    return () => ('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark'
    });
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        email: state.email,
        password: state.password
    };
}

export default connect(mapStateToProps, { googleLogin, emailLogin})(Login);