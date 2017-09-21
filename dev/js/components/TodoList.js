import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewTask} from '../actions/index';

function mapStateToProps(state){
return {
    tasks:state.tasks
}
}
function matchDispatchToProps(dispatch){

return bindActionCreators({addNewTask:addNewTask},dispatch)
}

class ToDoList extends React.Component {
createTaskList(){
    return this.props.tasks.map((task)=> {
        return(
            <li key={task.taskid}>{task.taskName}</li>);
    });
}
addTask() {
        //var addTasks = this.state.tasks;
        this.props.addNewTask(this.refs.addText.value);
        console.log("tasks :" + this.refs.addText.value);
    }
  displayTasks() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading text-center"><h2>ToDo List</h2></div>
                    <div className="panel-body">
                       <div>{this.createTaskList()}</div>
                        <div className="row"><input type="text" ref="addText" placeholder="Enter task" className="col-md-2 btn btn-default" ></input>
                <button className="btn btn-success col-md-1" onClick={this.addTask.bind(this)}>Add Task</button> &nbsp;
       
                    <div className="panel-footer"> Total</div>
                </div>
            </div>
            </div>
            </div>
        );
    }

   render(){
       return(
           <div>{this.displayTasks()}</div>
       );
   }  
   
}

export default connect(mapStateToProps,matchDispatchToProps)(ToDoList);

