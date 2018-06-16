import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg'

const AppTitle = (props) => {
    return (
        <div className="center-xs">
            <img className="App-logo" src={logo} alt="App Logo"/> <br/>
            <h1>{props.appTitle}</h1>
        </div>
    );
};

AppTitle.propTypes = {
    appTitle: PropTypes.string.isRequired
};

export default AppTitle;