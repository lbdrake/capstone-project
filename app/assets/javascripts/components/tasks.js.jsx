window.Tasks = React.createClass({
  handleNewTaskClick: function (e) {
    console.log("Clicked 'Add New Task' button - will load form");
  },

  render: function () {
    return (
      <ul>
        <li key={this.props.todolisttitle}>{this.props.todolisttitle}</li>
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
        <p onClick={this.handleNewTaskClick}><u>Add Task</u></p>
      </ul>
    );
  }
});
