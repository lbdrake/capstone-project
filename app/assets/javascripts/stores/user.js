(function(root) {
  'use strict';

  var _users = [],
      USER_CHANGE_EVENT = "USER_CHANGE_EVENT";

  root.UserStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _users.slice();
    },

    find: function (username) {
      var user_id = "";
      debugger;
      _users.forEach(function(user, idx){
        if (user.username === username) {
          user_id = user.username;
        }
      });
      return user_id;
    },

    resetUsers: function (users) {
      _users = users;
    },

    addChangeListener: function (callback) {
      this.on(USER_CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(USER_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case ProjectConstants.USERS_RECEIVED:
          UserStore.resetUsers(payload.users);
          UserStore.emit(USER_CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
