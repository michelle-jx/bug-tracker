class Ticket < ApplicationRecord
  has_many :solutions
  belongs_to :project
  belongs_to :user
end
