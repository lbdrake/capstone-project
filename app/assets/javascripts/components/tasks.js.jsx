window.Tasks = React.createClass({
  handleDeleteToDoListClick: function (e) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this to do list?")) {
      ApiUtil.deleteToDoList(this.props.todolist, this.props.project.id)
    }}.bind(this), 200)
  },

  render: function () {
    var ordered_tasks = this.props.tasks
    ordered_tasks.sort(function(a,b) {
      var adate = a.duedate || "2200-12-12"
      var bdate = b.duedate || "2200-12-12"
      return new Date(adate) - new Date(bdate)
    })
    ordered_tasks.sort(function(a,b) {return a.completed - b.completed})

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
              ordered_tasks.map(function(task){
                return (
                  <SingleTask task={task} todolist={this.props.todolist} project={this.props.project}/>
                );
              }.bind(this))
            }
          <TaskForm projectauthorusername={this.props.projectauthorusername} project={this.props.project} todolist={this.props.todolist}/>
          </ul>
        </li>
      </ul>
      </div>
    );
  }
});
