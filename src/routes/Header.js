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
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/" className="sidebar-header">Doctor Schedule</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Quem somos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Conheça o App
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Acesso ao sistema
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/physician">
                            <i>Physician</i>
                        </NavLink>
                    </NavItem>
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
                </Nav>              
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