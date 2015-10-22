window.Tasks = React.createClass({
  handleDeleteToDoListClick: function (e) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this to do list?")) {
      ApiUtil.deleteToDoList(this.props.todolist, this.props.project.id)
    }}.bind(this), 200)
  },


  render: function () {
    return (
      <div>
      <ul className="ulForToDoLists">
        <li key={this.props.todolist.id} className="todolist-title">
            {this.props.todolist.title}
            <span onClick={this.handleDeleteToDoListClick}
                  className="glyphicon glyphicon-trash delete-icon">
            </span>
        </li>
        <li>
          <ul>
            {
              this.props.tasks.map(function(task){
                return (
                  <SingleTask task={task} todolist={this.props.todolist}/>
                );
              }.bind(this))
            }
          </ul>
        </li>
      </ul>
      <TaskForm projectauthorusername={this.props.projectauthorusername} project={this.props.project} todolist={this.props.todolist}/>
      </div>
    );
  }
});
