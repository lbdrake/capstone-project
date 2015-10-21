(function(root) {
  'use strict';
  var _project_shares = [],
      PROJECT_SHARE_CHANGE_EVENT = "PROJECT_SHARE_CHANGE_EVENT";

  root.ProjectShareStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _project_shares.slice();
    },

    find: function(project_id) {
      var foundProjectShares;
      _project_shares.forEach(function(project_share){
        if (project_share.project_id === project_id) {
          foundProjectShares.push(project_share);
        }
      });
      return foundProjectShares;
    },

    resetProjects: function(projects) {},

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType){
        case ProjectConstants.PROJECT_SHARES_RECEIVED:
          ProjectShareStore.resetProjects(payload.projects);
          ProjectShareStore.emit(PROJECT_CHANGE_EVENT);
          break;
        }
    })
  });
}(this));
