import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin } from '../services/actions/userActions';

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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
                        <h1> Doctor Schedule</h1>
                        <h2><i>Login whith your favorite <b>Social Network</b></i></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">                        
                        <button className="btn btn-danger col-sm-12" onClick={this.props.googleLogin}>
                                Login with Google
                        </button>                    
                    </div>
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