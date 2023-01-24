class User < ApplicationRecord
  has_many :tickets
  has_many :solutions, through: :tickets
  has_many :user_projects
  has_many :projects, through: :user_projects

  has_secure_password
  validates :username, uniqueness: true
end