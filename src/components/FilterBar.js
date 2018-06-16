import React from 'react';
import PropTypes from 'prop-types';

import { toggleIsUrgent, toggleOrder } from './../redux/actions/index';


const FilterBar = (props) => {
    let urgentClassNames = "m-1 btn ";
    let ascendingStyle = urgentClassNames;
    let descendingStyle = urgentClassNames;
    urgentClassNames = urgentClassNames + (props.showUrgent ? "btn-danger" : "btn-outline-danger");
    ascendingStyle = ascendingStyle + (props.order ? "btn-primary" : "btn-outline-primary");
    descendingStyle = descendingStyle + (props.order ? "btn-outline-primary" : "btn-primary");

    return (
        <div className="card row m-2 p-2 start-xs">
            <div className="col-md-6">
                <label>Sort By Time: </label>
                <button className={ascendingStyle} onClick={() => props.dispatch(toggleOrder(true))}>Ascending</button>
                <button className={descendingStyle} onClick={() => props.dispatch(toggleOrder(false))}>Descending</button>
            </div>
            <div className="col-md-6">
                <label>Filter: </label>
                <button className={urgentClassNames} onClick={() => props.dispatch(toggleIsUrgent())}>Urgent Only</button>
            </div>
        </div>
    );
};

FilterBar.propTypes = {
    showUrgent: PropTypes.bool.isRequired,
    order: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default FilterBar;