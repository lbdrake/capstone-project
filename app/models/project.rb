# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  author_id   :string           not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base
  validates :title, :author_id, presence: true

  belongs_to(
    :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id
  )

  has_many(
    :todolists,
    class_name: :ToDoList,
    primary_key: :id,
    foreign_key: :project_id
  )

  has_many(
    :tasks,
    through: :todolists,
    source: :tasks
  )

  has_many(
    :project_shares,
    class_name: :ProjectShare,
    primary_key: :id,
    foreign_key: :project_id
  )

  has_many(
    :shared_users,
    through: :project_shares,
    source: :shared_user
  )

  def self.projects_for_user_id(user_id)
    owned_projects = self.where("author_id = ?", user_id) || []

    shared_projects = []
    project_shares = ProjectShare.where("shared_user_id = ?", user_id) || []
    project_shares.each do |project_share|
      shared_projects << Project.find(project_share.project_id)
    end
    shared_projects.concat(owned_projects)
  end
end
