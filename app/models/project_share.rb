# == Schema Information
#
# Table name: project_shares
#
#  id             :integer          not null, primary key
#  project_id     :integer          not null
#  shared_user_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class ProjectShare < ActiveRecord::Base
  validates :shared_user_id, :project_id, presence: true
  validates_uniqueness_of :shared_user_id, :scope => [:project_id]

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

  def self.findByProjectId(project_id)
    ProjectShare.where(project_id: project_id)
  end

  def self.findByProjectIdAndUserId(project_id, user_id)
    ProjectShare.where({project_id: project_id, shared_user_id: user_id})
  end
end
