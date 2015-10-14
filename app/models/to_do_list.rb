class ToDoList < ActiveRecord::Base
  validates :title, :project_id, presence: true
  validates :archived, inclusion: {in: [true, false]}

  belongs_to(
    :project,
    class_name: :Project,
    primary_key: :id,
    foreign_key: :project_id
  )
end
