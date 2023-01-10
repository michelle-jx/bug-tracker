class TicketSerializer < ActiveModel::Serializer
  attributes :id, :status, :priority, :type, :author, :assigned_to, :eta
end
