class ApplicationController < ActionController::API
  include ActionController::Cookies

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  private

  # def authorize
    # return render json: { error: 'Not authorized' }, status: :unauthorized unless session.include? :user_id
  # end

  # def admin_authorize
    # admin = session[:is_admin]
    # return if admin

    # (render json: { errors: ['This user does not have admin-level privileges.'] }, status: :unauthorized)
  # end
end
