json.extract!(@project, :title, :description, :author_id, :id, :created_at, :updated_at)
json.todolists @project.todolists do |todolist|
  json.extract!(todolist, :title, :archived, :updated_at)
  json.tasks todolist.tasks do |task|
    json.extract!(task, :title, :description, :author_id, :assigned_user_id, :completed, :duedate, :updated_at)
  end
end
