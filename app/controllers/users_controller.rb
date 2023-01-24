class UsersController < ApplicationController
  # skip_before_action :admin_authorize
  def index
    render json: User.all, status: :ok, include: :projects
  end

  def show
    user = User.find_by(id: session[:user_id])
    p user
    if user
      render json: user, include: :projects
    else
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end
end
