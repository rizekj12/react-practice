import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="badge bg-pill bg-secondary m-2">{this.props.totalCounters}</span>
            </nav>
        );
    }
}

export default NavBar;