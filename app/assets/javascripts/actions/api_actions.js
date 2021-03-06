ApiActions = {
  receiveAll: function(projects){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveSingleProject: function (project){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.SINGLE_PROJECT_RECEIVED,
      project: project
    })
  },

  receiveNewProject: function(project){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.NEW_PROJECT_RECEIVED,
      project: project
    });
  },

  deleteProject: function(project){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.DELETED_PROJECT,
      project: project
    });
  },

  editProject: function(project){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.EDITED_PROJECT,
      project: project
    });
  },

  receiveAllUsers: function(users){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveNewProjectShare: function(project_shares){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_SHARES_RECEIVED,
      project_shares: project_shares
    });
  },

  receiveMyTasks: function (tasks) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.TASKS_RECEIVED,
      tasks: tasks
    });
  }
};
