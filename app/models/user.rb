# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  attr_reader :password

  has_many(
    :projects,
    class_name: :Project,
    primary_key: :id,
    foreign_key: :author_id
  )

  has_many(
    :project_shares,
    class_name: :ProjectShare,
    primary_key: :id,
    foreign_key: :shared_user_id,
    dependent: :destroy
  )

  has_many(
    :shared_projects,
    through: :project_shares,
    source: :project
  )

  has_many(
    :assigned_tasks,
    class_name: :Task,
    primary_key: :id,
    foreign_key: :assigned_user_id
  )

  def self.findAllUsernames
    users = self.all
    usernames_and_ids = []
    users.each do |user|
      usernames_and_ids << {id: user.id, username: user.username}
    end
    return usernames_and_ids
  end

  def self.find_by_credentials(username, password)
    user = self.find_by_username(username)
    return user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
end
