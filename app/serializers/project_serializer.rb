class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :contributors
end
