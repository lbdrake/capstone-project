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
  }
};
