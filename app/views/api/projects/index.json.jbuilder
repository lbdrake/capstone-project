json.array!(@projects) do |project|
  json.extract!(project, :title, :description, :author_id, :id, :created_at, :updated_at)
end
