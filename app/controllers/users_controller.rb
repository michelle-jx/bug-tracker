class UsersController < ApplicationController
  skip_before_action :admin_authorize
  validates :username, uniqueness: true

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end
end
