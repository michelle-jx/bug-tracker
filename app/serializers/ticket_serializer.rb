class TicketSerializer < ActiveModel::Serializer
  attributes :id, :status, :priority, :issue, :author, :eta, :user_id, :project_id
  belongs_to :project
  belongs_to :user
  has_many :solutions
end
