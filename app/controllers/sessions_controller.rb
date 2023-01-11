class SessionsController < ApplicationController
  # post "/", to: "sessions#create"
  #  delete "/logout", to: "sessions#destroy"

  def create
    user = if user
             User.find_by(username: params[:username])
           else
             User.create(name: params[:name], username: params[:username], password: params[:password], admin: false)
           end
    if user&.authenticate params[:password]
      session[:user_id] = user.id
      session[:admin] = user.admin
      render json: user, status: 201
    else
      render json: { errors: ['Invalid username or password'] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end
