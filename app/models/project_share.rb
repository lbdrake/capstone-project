class ProjectShare < ActiveRecord::Base
  validates :shared_user_id, :project_id, presence: true

  belongs_to(
    :shared_user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :shared_user_id
  )

  belongs_to(
    :project,
    class_name: :Project,
    primary_key: :id,
    foreign_key: :project_id
  )
end
