# == Schema Information
#
# Table name: tasks
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  description      :text
#  author_id        :integer          not null
#  assigned_user_id :integer
#  todolist_id      :integer          not null
#  completed        :boolean          default(FALSE), not null
#  duedate          :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Task < ActiveRecord::Base
  validates :title, :author_id, :todolist_id, presence: true
  validates :completed, inclusion: {in: [true, false]}

  belongs_to(
    :todolist,
    class_name: ToDoList,
    primary_key: :id,
    foreign_key: :todolist_id
  )

  has_one(
    :project,
    through: :todolist,
    source: :project
  )
end
