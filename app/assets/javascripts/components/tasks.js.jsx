window.Tasks = React.createClass({
  getInitialState: function () {
    return ({
      showTaskForm: false
    })
  },

  handleNewTaskClick: function (e) {
    this.setState({showTaskForm: true});
    console.log("Clicked 'Add New Task' button - will load form");
  },

  handleDeleteToDoListClick: function (e) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this to do list?")) {
      console.log("Clicked 'Delete to do list button'")
    }}, 200)
  },

  render: function () {
    return (
      <div>
      <ul className="ulForToDoLists">
        <li key={this.props.todolisttitle} className="todolist-title">{this.props.todolisttitle} <span onClick={this.handleDeleteToDoListClick} className="glyphicon glyphicon-trash delete-todolist-icon"></span></li>
        <li>
          <ul>
            {
              this.props.tasks.map(function(task){
                return (
                <li key={task.id}>{task.title}</li>
                );
              })
            }
          </ul>
        </li>
      </ul>
      { this.state.showTaskForm ? <TaskForm projectauthorusername={this.props.projectauthorusername} project={this.props.project} /> : <p onClick={this.handleNewTaskClick}><u>Add Task</u></p> }
      </div>
    );
  }
});
