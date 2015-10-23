json.array!(@tasks) do |task|
  json.extract!(task, :title, :description, :author_id, :assigned_user_id, :completed, :duedate, :updated_at, :id)
end
