import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin } from '../services/actions/userActions';
import logo from '../../assets/img/logo-agendai.png';

class Login extends Component {
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
                <div class="col-md-6 ">
                    <img src={logo} className="img-login" href="/" />
                    <form className="login">
                        <div className="input-group">                            
                                <i class="material-icons orange600">account_circle</i>
                                <input id="login-email" type="text" name="email" placeholder="email" />                            
                        </div>
                        <div className="input-group">                        
                            <i class="material-icons orange600">lock</i>
                            <input id="password" type="password" placeholder="password" />
                        </div>
                        <div className="row">
                            <div className="col-sm-12">                        
                                <button className="btn btn-danger col-sm-12" onClick={this.props.googleLogin}>
                                    Login with Google
                                </button>                    
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
        user: state.user
    };
}

export default connect(mapStateToProps, { googleLogin, twitterLogin })(Login);