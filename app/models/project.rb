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
end
