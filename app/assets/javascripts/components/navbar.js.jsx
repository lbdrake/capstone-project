window.NavBar = React.createClass({
  render: function (){
    // debugger;
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
            <ul className="nav navbar-nav nav-center">
              <li className="nav-bling"><a href="#">Projects<span className="sr-only">(current)</span></a></li>
              <li className="nav-bling"><a href="#">Calendar</a></li>
              <li className="nav-bling"><a href="#">Me</a></li>
            </ul>

            <ul className="nav nav-stacked navbar-right">
                <ul className="nav navbar-nav navbar-links">
                  <li className="navbar-text">{"Signed in as " + window.CURRENT_USERNAME}</li>
                  <li className="nav-bling"><a href="#">Logout</a></li>
                </ul>
              <form className="navbar-form" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
