# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


sally = User.create({})
users = User.create([
  {username: "AstronautSally", password: "spacetime", id: 1},
  {username: "Rupert", password: "eventplanner", id: 2},
  {username: "Felicia", password: "sciencelover", id: 3},
  {username: "Darby", password: "spacescience", id: 4},
  {username: "Eleonora", password: "sallysassistant", id: 5}])

projects = Project.create([
  {title: "Trip to Space Station", description: "Team of astronauts pushing the final frontier", author_id: 1, id: 1},
  {title: "Book Signing Events", author_id: 3, id: 2},
  {title: "Sally's Personal Tasks", author_id: 1, id: 3},
  {title: "Science Festival for Kids", description: "We bring the love of space and science", author_id: 2, id: 4}])

spacetriptodolists = ToDoList.create([
  {title: "Assemble team of astronauts", project_id: 1, archived: false, id: 1},
  {title: "Train team of astronauts", project_id: 1, archived: false, id: 2},
  {title: "Launch Day!", project_id: 1, archived: false, id: 3},
  {title: "Plan Welcome Home Party", project_id: 1, archived: false, id: 4},
  ])

spacetriptasks = Task.create([
  {title: "Call Jim at NASA for recommendations", author_id: 1, assigned_user_id: 1, todolist_id: 1, completed: false, id: 1},
  {title: "Place job listing on Craigslist", description: "Run ads in CA, TX, and FL", author_id: 3, assigned_user_id: 3, todolist_id: 1, completed: true, id: 2},
  {title: "Review Resumes and conduct interviews", author_id: 3, assigned_user_id: 3, todolist_id: 1, completed: false, id: 3},
  {title: "Physical Fitness Tasks", author_id: 3, assigned_user_id: 1, todolist_id: 2, completed: false, id: 4},
  {title: "Flight Simulator Training", author_id: 3, assigned_user_id: 1, todolist_id: 2, completed: false, id: 5},
  {title: "Initiate launch sequence!", author_id: 3, assigned_user_id: 1, todolist_id: 3, completed: false, id: 6},
  {title: "Buy cake and balloons", author_id: 3, assigned_user_id: 1, todolist_id: 4, completed: false, id: 7},
  {title: "Order 'Welcome Home' Banner", author_id: 3, assigned_user_id: 3, todolist_id: 4, completed: false, id: 8}
  ])

booksigningtodolists = ToDoList.create([
  {title: "Set up local venue", project_id: 2, archived: false, id: 5},
  {title: "Generate buzz about the event", project_id: 2, archived: false, id: 6},
  {title: "At Book Signing Event", project_id: 2, archived: false, id: 7}])

projectshares = ProjectShare.create([
  {project_id: 1, shared_user_id: 2},
  {project_id: 1, shared_user_id: 3},
  {project_id: 1, shared_user_id: 4},
  {project_id: 1, shared_user_id: 5},
  {project_id: 4, shared_user_id: 1},
  {project_id: 3, shared_user_id: 1},
  {project_id: 2, shared_user_id: 1}
  ])

ActiveRecord::Base.connection.tables.each { |t| ActiveRecord::Base.connection.reset_pk_sequence!(t) }
