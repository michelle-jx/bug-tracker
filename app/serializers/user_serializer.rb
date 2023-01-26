class UserSerializer < ActiveModel::UserSerializer
  attributes :id, :username, :admin
  has_many :tickets
  has_many :user_projects
  has_many :projects, through: :user_projects
  #fjdfkdaslfjksd
end