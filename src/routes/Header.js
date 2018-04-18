import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userActions';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
      render() {
        return (
          <div>
            <Navbar color="faded" light expand="true">
              <NavbarBrand href="/" className="sidebar-header">Doctor Schedule</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    {
                        this.props.user === null ? (
                            <NavLink href="/Login">
                                <i className="glyphicon glyphicon-briefcase">login</i>
                            </NavLink>                            
                        ) : (
                            <NavLink href="/logout" onClick={() => this.props.logout()}>
                                <i className="glyphicon glyphicon-briefcase">Logout</i>
                            </NavLink>
                            )
                    }                                                       
                    </NavItem>
                    <NavItem>
                        <NavLink href="/scheduling">
                            <i>Scheduling</i>
                        </NavLink>
                    </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}
function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser, logout })(Header);