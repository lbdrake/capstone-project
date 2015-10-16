ApiActions = {
  receiveAll: function(projects){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
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

  logoutUser: function(){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.LOGOUT_USER
    });
  }
};
