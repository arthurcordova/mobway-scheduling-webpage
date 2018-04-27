import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { getPhysicians } from '../services/actions/physiciansAction';

class Physician extends Component {
    constructor(props) {
        super(props);
        this.renderPhysicians = this.renderPhysicians.bind(this);
    }   

    renderPhysicians() {        
        return _.map(this.props.physicians, (physician, key) => {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                        <div className="jumbotron">
                            <h2>Physician: {physician.name}</h2>                            
                            <p>Scheduled To: {physician.specialty[0].name}</p>
                        </div>
                        </div>
                    </div>
                </div>
            )
          });
    }
    render() {
        return (
            <div>
            {this.renderPhysicians()}
            <Link to="/"> &#171; Back</Link>
            </div>
        );
    }        
}

function mapStateToProps(state, ownProps) {
    //console.log(state.physicians);
    return {        
        physicians : state.physicians
    }
  }

export default connect(mapStateToProps, {getPhysicians}) (Physician);  