window.Tasks = React.createClass({

  handleDeleteToDoListClick: function (e) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this to do list?")) {
      console.log("Clicked 'Delete to do list button'")
    }}, 200)
  },

  render: function () {
    return (
      <div>
      <ul className="ulForToDoLists">
        <li key={this.props.todolist.id} className="todolist-title">{this.props.todolist.title} <span onClick={this.handleDeleteToDoListClick} className="glyphicon glyphicon-trash delete-todolist-icon"></span></li>
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
      <TaskForm projectauthorusername={this.props.projectauthorusername} project={this.props.project} todolist={this.props.todolist}/>
      </div>
    );
  }
});
