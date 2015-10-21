# == Schema Information
#
# Table name: to_do_lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  project_id :integer          not null
#  archived   :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ToDoList < ActiveRecord::Base
  validates :title, :project_id, presence: true
  validates :archived, inclusion: {in: [true, false]}

  belongs_to(
    :project,
    class_name: :Project,
    primary_key: :id,
    foreign_key: :project_id
  )

  has_many(
    :tasks,
    class_name: :Task,
    primary_key: :id,
    foreign_key: :todolist_id,
    dependent: :destroy
  )
end
