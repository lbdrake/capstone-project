json.extract!(project, :title, :description, :author_id, :id, :created_at, :updated_at)

if project.project_shares
  json.shared_users project.project_shares do |project_share|
    json.username User.find(project_share.shared_user_id).username
    json.id project_share.shared_user_id
    json.project_share_id project_share.id
  end
end

json.todolists project.todolists do |todolist|
  json.extract!(todolist, :title, :id, :archived, :updated_at)
  json.tasks todolist.tasks do |task|
    json.extract!(task, :title, :description, :author_id, :assigned_user_id, :completed, :duedate, :updated_at)
  end
end
