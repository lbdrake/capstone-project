window.ToDoLists = React.createClass({
  handleAddNewToDoListClick: function () {
    console.log("Clicked 'Add New To Do List' button - will show a form");
  },

  render: function () {
    var todolists = this.props.todolists;
    return (
      <div>
        <h1 className="toDoListHeader">To Do Lists<button onClick={this.handleAddNewToDoListClick} className="btn btn-default btn-xs addToDoListButton ">Add To Do List</button></h1>
        {
          todolists.map (function(todolist) {
            return (
                <Tasks key={todolist.id}
                  todolisttitle={todolist.title}
                  tasks={todolist.tasks}
                  project={this.props.project} />
            );
          }.bind(this))
        }
    </div>
    );
  }
});
