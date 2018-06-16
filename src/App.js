import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import { reduce } from './redux/reducers/index';

import 'bootstrap/dist/css/bootstrap.css';
import 'flexboxgrid/dist/flexboxgrid.css';
import AppTitle from './components/AppTitle';
import FilterBar from './components/FilterBar';
import AddTodoBar from './components/AddTodoBar';
import TodoList from './components/TodoList';

class App extends Component {
    render() {
        return (
            <div className="center-xs">
                <AppTitle appTitle={this.props.appName}/>
                <FilterBar showUrgent={this.props.showIsUrgent} order={this.props.order} dispatch={this.props.dispatch}/>
                <AddTodoBar dispatch={this.props.dispatch}/>
                <TodoList showUrgent={this.props.showIsUrgent} order={this.props.order} todoList={this.props.todoList} dispatch={this.props.dispatch}/>
            </div>
        );
    }
}

export default connect(reduce)(App);
