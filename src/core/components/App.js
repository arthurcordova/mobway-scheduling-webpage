import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getUser, logout} from '../services/actions/userActions';
import { Link, NavLink } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    //state
    this.state = {
      title: '',
      body: ''
    };
    //bind            
  }


  render() {
    
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-2 text-center">
            <img
              src={this.props.user.photoURL}
              height="100pc"
              className="img img-responsive circle"
              style={{padding: '20px' }}              
            />
            <h4 className="username">Welcome back {this.props.user.displayName}</h4>
            <a className="nav-link nav-button headerText" href="/" onClick={() => this.props.logout()}>
              <i className="glyphicon glyphicon-briefcase text-right">logout</i>
            </a>
          </div>          
        </div>        
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {  
  return {    
    user: state.user    
  }
}

export default connect(mapStateToProps, {getUser, logout}) (App);  