import React, { Component } from 'react';
import { connect } from 'react-redux';
//with withRoute you can get acces to the history object's property
import { withRouter } from 'react-router-dom';
import { getUser } from '../services/actions/userActions';
import { getPhysicians } from '../services/actions/physiciansAction';
import Loading from './Loading';

class LoadingComponent extends Component {
    componentWillMount() {
        const { userLoading, physiciansLoading} = this.props;
        // if we tried to load the user, load user
        if (userLoading === undefined) {
            this.props.getUser();
        }

        if (physiciansLoading === undefined) {
            this.props.getPhysicians();
        }
        
    }

    componentWillReceiveProps(nextProps) {
        //wait for user to get authenticated and try to load notes
        if (nextProps.physiciansLoading === -1 && nextProps.user !== null) {            
            this.props.getPhysicians();
        }
    }

    render() {
        const { userLoading, physiciansLoading, children } = this.props;
        if ((!userLoading && !physiciansLoading) || this.props.user === null) {
            return <div>{children}</div>;
        } else {
            return <Loading />;
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        userLoading: state.loading.user,        
        physiciansLoading: state.loading.physicians
    };
}

export default withRouter(connect(mapStateToProps, { getUser, getPhysicians })(LoadingComponent));