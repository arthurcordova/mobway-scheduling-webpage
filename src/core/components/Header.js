import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, logout } from '../services/actions/userActions';
import logo from '../../assets/img/logo-agendai.png';


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
            <nav className="navbar navbar-expand-lg navbar-light bg-light flex">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-class" id="navbarTogglerDemo01">
                <a href="/">
                <img src={logo} className="img-fluid" href="/" />
                </a>
                <a className="nav-link nav-button headerText" href="/">Quem Somos
                    <span className="sr-only">(current)</span>
                </a>
                <a className="nav-link nav-button headerText" href="/">Conheça o App</a>
                <a className="nav-link nav-button headerText" href="/Physician">Acesso ao Sistema</a>
                </div>
            </nav>
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