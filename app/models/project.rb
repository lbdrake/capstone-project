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
    # owned_projects = self.where("author_id = ?", user_id)
    # shared_projects = User.find(user_id).shared_projects
    # projects = owned_projects.merge(shared_projects)
    joins_cond = <<-SQL
       LEFT OUTER JOIN
         project_shares ON projects.id = project_shares.project_id
       SQL

     where_cond = <<-SQL
       ((projects.author_id = :user_id) OR (project_shares.shared_user_id = :user_id))
     SQL

     Project.joins(joins_cond).where(where_cond, user_id: user_id).uniq
  end
end
