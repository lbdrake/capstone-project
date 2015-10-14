(function(root) {
  'use strict';
  var _projects = [],
      PROJECT_CHANGE_EVENT = "PROJECT_CHANGE_EVENT";

  root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _projects.slice();
    },

    resetProjects: function (projects) {
      _projects = projects;
    },

    addChangeListener: function (callback) {
      this.on(PROJECT_CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(PROJECT_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === ProjectConstants.PROJECTS_RECEIVED) {
        ProjectStore.resetProjects(payload.projects);
        ProjectStore.emit(PROJECT_CHANGE_EVENT);
      }
    })
  });
}(this));
