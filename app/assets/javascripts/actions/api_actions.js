ApiActions = {
  receiveAll: function(projects){
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  }
};
