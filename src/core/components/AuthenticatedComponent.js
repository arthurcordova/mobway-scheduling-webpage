import React, { Component } from 'react';
import { connect } from 'react-redux';
//with withRoute you can get acces to the history object's property
import { withRouter } from 'react-router-dom';

class AuthenticatedComponent extends Component {
    componentDidUpdate() {
        //make sure the loading is done then if no user then push them to login page
        const {userLoading, user} = this.props;
        if (userLoading === false && !user) {
            this.props.history.push('/login');
        }
    }
    render() {
        const {user, userLoading, children} = this.props;
        return (userLoading === false && user) ? <div>{children}</div> : null;
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        userLoading: state.loading.user        
    };
}

export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));