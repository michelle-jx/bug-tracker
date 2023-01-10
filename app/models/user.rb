class User < ApplicationRecord
  has_many :tickets
  has_many :solutions, through: :tickets
  has_many :projects

  has_secure_password
end
