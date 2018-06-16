import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addTodo } from './../redux/actions/index';

class AddTodoBar extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    state = {
        title: "",
        isUrgent: false
    }
    

    titleChanged = (evt) => {
        this.setState({title: evt.target.value});
    }

    isUrgentChanged = (evt) => {
        this.setState({isUrgent: evt.target.value});
    }

    createNewTodo = () => {
        let newTodo = {
            id: Math.floor(Math.random()*100000) * Math.floor(Math.random()*100000),
            name: this.state.title,
            createdDateTime: Date.now(),
            isUrgent: this.state.isUrgent
        };

        this.props.dispatch(addTodo(newTodo));
        this.setState({title: '', isUrgent: false});
    }

    render() {
        return (
            <div className="card p-2 m-2">
                <div className="row start-xs">
                    <input className="m-2 form-control col-md-4" type="text" placeholder="To-Do Name" value={this.state.title} onChange={this.titleChanged}/>
                    <div className="m-2 col-md-1 form-control">
                        <input type="checkbox" checked={this.state.isUrgent} onChange={this.isUrgentChanged}/> <label>Urgent</label>
                    </div>
                    <button onClick={this.createNewTodo} className="col-md-2 m-2 btn btn-outline-dark">Add</button>
                </div>
            </div>
        );
    }
}

export default AddTodoBar;