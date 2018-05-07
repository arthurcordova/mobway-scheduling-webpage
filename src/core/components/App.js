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
        <div className="row">
          <div className="col-sm-2 text-center">
            <img
              src={this.props.user.photoURL}
              height="100pc"
              className="img img-responsive circle"
              style={{padding: '20px' }}              
            />
            <h4 className="username">Welcome back {this.props.user.displayName}</h4>                     
            <a className="nav-link nav-button headerText" href="/" onClick={() => this.props.logout()}>
              <i className="glyphicon glyphicon-briefcase">logout</i>
            </a>
          </div>            
          <div className="col-sm-10">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input 
                  onChange={this.handleChange} 
                  value={this.state.title}
                  type="text" 
                  name="title" 
                  className="form-control no-border" 
                  placeholder="Title..." 
                  required />
              </div>
              <div className="form-group">
                <textarea 
                  onChange={this.handleChange} 
                  value={this.state.body}
                  type="text"
                  name="body" 
                  className="form-control no-border" 
                  placeholder="Body..." 
                  required />
              </div>
              <div className="form-group">
              	<button className="btn btn-primary col-sm-12" >Save</button>
              </div>
            </form>
            <br />
            <br />
            <br />            
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