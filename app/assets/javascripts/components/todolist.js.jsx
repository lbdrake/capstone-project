window.ToDoLists = React.createClass({
  handleAddNewToDoListClick: function () {
    console.log("Clicked 'Add New To Do List' button - will show a form");
  },

  render: function () {
    var todolists = this.props.todolists;
    return (
      <div>
        <p onClick={this.handleAddNewToDoListClick}>To Do Lists <u>Add To Do List</u></p>
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
