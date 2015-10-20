json.array!(@projectshares) do |project|
  json.extract!(project, :project_id, :shared_user_id, :id, :created_at, :updated_at)
end
