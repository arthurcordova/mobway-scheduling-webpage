import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { getSchedulings } from '../actions/schedulingsAction';
import {getNotes} from '../actions/notesAction';

class Scheduling extends Component {
    constructor(props) {
        super(props);
        this.renderSchedulings = this.renderSchedulings.bind(this);
    }   

    renderSchedulings() {       
        return _.map(this.props.schedulings, (scheduling, key) => {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                        <div className="jumbotron">
                            <h2>Physician: {scheduling.physician.name}</h2>
                            <h3>Patient: {scheduling.patient.name}</h3>
                            <p>Scheduled To: {scheduling.scheduledTo}</p>
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
            {this.renderSchedulings()}
            <Link to="/"> &#171; Back</Link>
            </div>
        );
    }        
}

function mapStateToProps(state, ownProps) {
    return {
        schedulings: state.schedulings
    }
  }

export default connect(mapStateToProps, {getSchedulings, getNotes}) (Scheduling);  