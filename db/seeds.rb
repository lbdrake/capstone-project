# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete(1..5)

users = User.create([
  {username: "AstronautSally", password: "spacetime", id: 1},
  {username: "Rupert", password: "eventplanner", id: 2},
  {username: "Felicia", password: "sciencelover", id: 3},
  {username: "Darby", password: "spacescience", id: 4},
  {username: "Eleonora", password: "sallysassistant", id: 5}])

Project.delete(1..4)

projects = Project.create([
  {title: "Book Signing Events", author_id: 3, id: 2},
  {title: "Sally's Personal Tasks", author_id: 1, id: 3},
  {title: "Science Festival for Kids", description: "We bring the love of space and science", author_id: 2, id: 4},
  {title: "Trip to Space Station", description: "Team of astronauts pushing the final frontier", author_id: 1, id: 1}
  ])

ToDoList.delete(1..13)

spacetriptodolists = ToDoList.create([
  {title: "Assemble team of astronauts", project_id: 1, archived: false, id: 1},
  {title: "Train team of astronauts", project_id: 1, archived: false, id: 2},
  {title: "Launch Day!", project_id: 1, archived: false, id: 3},
  {title: "Plan Welcome Home Party", project_id: 1, archived: false, id: 4},
  ])

Task.delete(1..30)

spacetriptasks = Task.create([
  {title: "Call Jim at NASA for recommendations", author_id: 1, assigned_user_id: 1, todolist_id: 1, duedate: "2015-09-09", completed: false, id: 1},
  {title: "Place job listing on Craigslist", description: "Run ads in CA, TX, and FL", author_id: 3, assigned_user_id: 3, todolist_id: 1, completed: true, id: 2},
  {title: "Review Resumes and conduct interviews", author_id: 3, assigned_user_id: 3, todolist_id: 1, completed: false, duedate: "2015-11-09", id: 3},
  {title: "Pass Physical Fitness Test", author_id: 3, assigned_user_id: 1, todolist_id: 2, completed: false, duedate: "2016-04-02", id: 4},
  {title: "Complete Flight Simulator Training", author_id: 3, assigned_user_id: 1, todolist_id: 2, completed: false, duedate: "2016-05-07", id: 5},
  {title: "Initiate launch sequence!", author_id: 3, assigned_user_id: 1, todolist_id: 3, completed: false, duedate: "2016-12-12", id: 6},
  {title: "Buy cake and balloons", author_id: 3, assigned_user_id: 5, todolist_id: 4, completed: false, id: 7},
  {title: "Order 'Welcome Home' Banner", author_id: 3, assigned_user_id: 4, todolist_id: 4, completed: false, duedate: "2015-09-10", id: 8}
  ])

booksigningtodolists = ToDoList.create([
  {title: "Choose local venue", project_id: 2, archived: false, id: 5},
  {title: "Generate buzz about the event", project_id: 2, archived: false, id: 6},
  {title: "Prep for Book Signing Event", project_id: 2, archived: false, id: 7}])

booksigningtasks = Task.create([
  {title: "Pack my favorite book signing pen", author_id: 1, assigned_user_id: 1, todolist_id: 7, completed: true, id: 9},
  {title: "Set up banner and display", author_id: 3, assigned_user_id: 3, todolist_id: 7, completed: false, id: 10},
  {title: "Post on social media", author_id: 3, assigned_user_id: 4, todolist_id: 6, completed: false, id: 11},
  {title: "Space Magazine Interview", author_id: 3, assigned_user_id: 4, todolist_id: 6, completed: false, id: 12},
  {title: "Check out local University", author_id: 3, assigned_user_id: 5, todolist_id: 5, completed: true, duedate: "2015-08-05", id: 13},
  {title: "Check out local library", author_id: 3, assigned_user_id: 2, todolist_id: 5, completed: true, duedate: "2015-08-06", id: 14},
  {title: "Check out local auditorium", author_id: 3, assigned_user_id: 2, todolist_id: 5, completed: true, duedate: "2015-07-08", id: 15}
  ])

sallypersonaltodolists = ToDoList.create([
  {title: "Financial", project_id: 3, archived: false, id: 8},
  {title: "Health", project_id: 3, archived: false, id: 9},
  {title: "Writing", project_id: 3, archived: false, id: 10}
  ])

sallypersonaltasks = Task.create([
  {title: "Physical Fitness Exam before space flight", author_id: 1, assigned_user_id: 1, todolist_id: 9, duedate: "2015-09-09", completed: true, id: 16},
  {title: "Vaccinations agains alien diseases", description: "Protecting against cooties, sniffles and probes", author_id: 1, assigned_user_id: 1, todolist_id: 9, completed: false, id: 17},
  {title: "Take antigravity pills", author_id: 1, assigned_user_id: 1, todolist_id: 9, completed: false, duedate: "2015-09-09", id: 18},
  {title: "Meeting with Financial Planner", author_id: 1, assigned_user_id: 1, todolist_id: 8, completed: true, id: 19},
  {title: "Charity Donations to AstronautsWithoutBorders", author_id: 1, assigned_user_id: 1, todolist_id: 8, completed: false, duedate: "2016-05-07", id: 20},
  {title: "Write an outline of my memoirs as an astronaut", author_id: 1, assigned_user_id: 1, todolist_id: 10, completed: false, duedate: "2015-09-10", id: 21},
  {title: "Complete first draft and send to editor", author_id: 1, assigned_user_id: 1, todolist_id: 10, completed: false, duedate: "2016-03-10", id: 22},
  {title: "Publish memoirs for eternal glory!", author_id: 1, assigned_user_id: 1, todolist_id: 10, completed: false, duedate: "2016-09-10", id: 23}
  ])

festivaltodolists = ToDoList.create([
  {title: "Set Up Festival Venue", project_id: 4, archived: false, id: 11},
  {title: "Select Science Fair Booth Participants", project_id: 4, archived: false, id: 12},
  {title: "FESTIVAL DAY", project_id: 4, archived: false, id: 13}
  ])

festivaltasks = Task.create([
  {title: "Apply for festival permit from City Hall", author_id: 2, assigned_user_id: 3, todolist_id: 11, duedate: "2015-09-09", completed: false, id: 24},
  {title: "Hire crew to construct fairgrounds", author_id: 2, assigned_user_id: 3, todolist_id: 11, completed: true, id: 25},
  {title: "Walk through site with the team prior to setup", author_id: 2, assigned_user_id: 3, todolist_id: 11, completed: false, duedate: "2015-11-09", id: 26},
  {title: "Review applications", author_id: 3, assigned_user_id: 1, todolist_id: 12, completed: false, id: 27},
  {title: "Sally's Speech", author_id: 1, assigned_user_id: 1, todolist_id: 13, completed: false, id: 28},
  {title: "Set up booths", author_id: 3, assigned_user_id: 1, todolist_id: 13, completed: false, duedate: "2016-12-12", id: 29},
  {title: "Final walkthrough and check in with participants", author_id: 3, assigned_user_id: 5, todolist_id: 13, completed: false, id: 30}
  ])

ProjectShare.delete(1..9)

projectshares = ProjectShare.create([
  {project_id: 1, shared_user_id: 2, id: 1},
  {project_id: 1, shared_user_id: 3, id: 2},
  {project_id: 1, shared_user_id: 4, id: 3},
  {project_id: 1, shared_user_id: 5, id: 4},
  {project_id: 2, shared_user_id: 2, id: 5},
  {project_id: 2, shared_user_id: 1, id: 6},
  {project_id: 2, shared_user_id: 4, id: 7},
  {project_id: 2, shared_user_id: 5, id: 8},
  {project_id: 4, shared_user_id: 1, id: 9}
  ])

ActiveRecord::Base.connection.tables.each { |t| ActiveRecord::Base.connection.reset_pk_sequence!(t) }
