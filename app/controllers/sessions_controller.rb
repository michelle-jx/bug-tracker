class SessionsController < ApplicationController
  # post "/", to: "sessions#create"
  #  delete "/logout", to: "sessions#destroy"

  def create
    user = User.find_by(username: params[:username])
           if !user
             user = User.create(name: params[:name], username: params[:username], password: params[:password], admin: false)
           end
    if user&.authenticate params[:password]
      session[:user_id] = user.id
      session[:user_name] = user.name
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
