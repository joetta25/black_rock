import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

class Task extends Component {
    state = {
        name: [],
        description: [],
        priority: [],
        runTime: []
    };

    componentDidMount() {

        axios.put(`/api/task`)

        // ('/task', { method: GET }).then(rawJSON => { return rawJSON.json() }).then(data => {
        //     console.log(data.name);
        //     this.setState({ task: data.name, description: data.description, priority: data.priority });
        // });
    }
    render() {

        return (
            <div>
                <div>
                    <header className="jumbotron ">
                        <h1 className="display-4 task-title">Task Master Home</h1>
                    </header>
                </div>
                <div className="container task">
                    <h4>Create New Task</h4>
                    <form className="form-horizontal" action=" ">
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Name:</label>
                            <div className="col-sm-10">
                                <input type="text" id="person" value=" " />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Description:</label>
                            <div className="col-sm-10">
                                <input type="text" id="Description" value=" " />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Priority:</label>
                            <div className="col-sm-10">
                                <input type="text" id="person" value=" " />
                            </div>
                        </div>
                        <div className="col-sm-offset-2 col-sm-10 runTimeButtons">
                            <h4>Max Allowed Run-time</h4>
                            <button type="button" className="btn btn-default butttonH">HH</button>
                            <button type="button" className="btn btn-default butttonM">MM</button>
                            <button type="button" className="btn btn-default butttonS">SS</button>
                        </div>
                        <button type="submit" className="btn btn-success">Create Task</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Task;