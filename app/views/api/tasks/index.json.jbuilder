json.array!(@tasks) do |task|
  json.extract!(task, :title, :description, :author_id, :assigned_user_id, :completed, :duedate, :updated_at, :id)
  json.project_id task.project.id

  if Project.find(task.project.id).project_shares
    json.shared_users Project.find(task.project.id).project_shares do |project_share|
      json.username User.find(project_share.shared_user_id).username
      json.id project_share.shared_user_id
      json.project_share_id project_share.id
    end
  end
end
