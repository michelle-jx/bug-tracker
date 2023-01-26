class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :contributors
  has_many :tickets
  has_many :solutions, through: :tickets
end
