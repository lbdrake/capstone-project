# Phase 3: To Do Lists and Tasks (2 days)

## Rails
### Models
* ToDoList
* Task
* TaskAssignment

### Controllers
* Api::ToDoListsController (create, destroy, index, show, update)
* Api::TasksController (create, destroy, index, show, update)
* Api::TasksAssignmentsController (create, destroy, index, show, update)

### Views
* todolists/index.json.jbuilder
* todolists/show.json.jbuilder
* tasks/index.json.jbuilder
* tasks/show.json.jbuilder

## Flux
### Views (React Components)
* ToDoListIndex
  - ToDoListIndexItem
* ToDoListForm
* TaskIndex
  - TaskIndexItem
* TaskForm
* SearchIndex

### Stores
* ToDoList
* Task
* TaskAssignment

### Actions
* ApiActions.receiveAllToDoLists
* ApiActions.receiveSingleToDoList
* ApiActions.deleteToDoList
* ApiActions.receiveAllTasks
* ApiActions.receiveSingleTask
* ApiActions.deleteTask

### ApiUtil
* ApiUtil.fetchAllToDoLists
* ApiUtil.fetchSingleToDoList
* ApiUtil.createToDoList
* ApiUtil.editToDoList
* ApiUtil.destroyToDoList
* ApiUtil.fetchAllTasks
* ApiUtil.fetchSingleTask
* ApiUtil.createTask
* ApiUtil.editTask
* ApiUtil.destroyTask

## Gems/Libraries
