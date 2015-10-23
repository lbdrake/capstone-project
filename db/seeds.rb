# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


sally = User.create({})
users = User.create([
  {username: "SallyRide", password: "spacetime", id: 1},
  {username: "Rupert", password: "eventplanner", id: 2},
  {username: "Felicia", password: "sciencelover", id: 3},
  {username: "Darby", password: "spacescience", id: 4},
  {username: "Eleonora", password: "sallysassistant", id: 5}])

projects = Project.create([
  {title: "Trip to Space Station", description: "Team of astronauts pushing the final frontier", author_id: 1, id: 1},
  {title: "Organizing Press Outreach for Science Festival", author_id: 3, id: 2},
  {title: "Sally's Personal Tasks", author_id: 1, id: 3},
  {title: "Daily Lunch for the Team", description: "Coordinate with caterers and serve daily at 1pm", author_id: 5, id: 4},
  {title: "Plan Sally Ride Science Festival for Girls 2016", description: "We bring the love of space and science", author_id: 2, id: 5},])

todolists = ToDoList.create([
  {title: "Assemble team of astronauts", project_id: 1, archived: false, id: 1},
  {title: "Train team of astronauts", project_id: 1, archived: false, id: 2},
  {title: "Plan the mission", project_id: 1, archived: false, id: 3},
  {title: "Launch Day!", project_id: 1, archived: false, id: 4},
  {title: "Plan Welcome Home Party", project_id: 1, archived: false, id: 5},
  ])

tasks = Task.create([
  {title: "Call Jim at NASA for recommendations", author_id: 1, assigned_user_id: 1, todolist_id: 1, completed: false, id: 1},
  {title: "Place job listing on Craigslist", description: "Run ads in CA, TX, and FL", author_id: 3, assigned_user_id: 3, todolist_id: 1, completed: false, id: 2},
  {title: "Review Resumes and conduct interviews", author_id: 3, assigned_user_id: 1, todolist_id: 1, completed: false, id: 3}
  ])

projectshares = ProjectShare.create([
  {project_id: 1, shared_user_id: 2},
  {project_id: 1, shared_user_id: 3},
  {project_id: 1, shared_user_id: 4},
  {project_id: 1, shared_user_id: 5},
  {project_id: 5, shared_user_id: 1},
  {project_id: 2, shared_user_id: 1}
  ])

ActiveRecord::Base.connection.tables.each { |t| ActiveRecord::Base.connection.reset_pk_sequence!(t) }
