class TicketSerializer < ActiveModel::Serializer
  attributes :id, :status, :priority, :issue, :author, :eta, :user_id, :project_id
  belongs_to :project
  has_many :solutions
  belongs_to :user
end
