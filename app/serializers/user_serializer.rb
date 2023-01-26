class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin
  has_many :tickets
  has_many :user_projects
  has_many :projects
  #fjdfkdaslfjksd
end