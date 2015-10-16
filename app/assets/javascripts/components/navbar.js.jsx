window.NavBar = React.createClass({
  logoutUser: function (e) {
    e.preventDefault();
    ApiUtil.logoutUser();
  },

  render: function (){
    return (
      <nav className="nav navbar-default nav-group">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar-collapse-1"
                    aria-expanded="false" >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar navbar-brand" href="#" >
              <img src="/assets/TaskMaster-logo.png" alt="TaskMaster Logo" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav nav-center nav-bling-container">
              <li className="nav-bling"><a href="#">Projects<span className="sr-only">(current)</span></a></li>
              <li className="nav-bling"><a href="#">Calendar</a></li>
              <li className="nav-bling"><a href="#">Me</a></li>
            </ul>

            <ul className="nav nav-stacked navbar-right">
                <ul className="nav navbar-nav navbar-links navbar-double-links">
                  <li className="navbar-text nav-username">{"Signed in as " + window.CURRENT_USERNAME}</li>
                  <li><a href="#logout" className="nav-logout" onClick={this.logoutUser}>Logout</a></li>
                </ul>
              <form className="navbar-form" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search projects for..." />
                  </div>
                  <button type="submit" className="btn btn-default">Go!</button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
