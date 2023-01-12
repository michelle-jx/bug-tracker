class ApplicationController < ActionController::API
  include ActionController::Cookies
  # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  private

  # def authorize
  #   @current_user = User.find_by(id: session[:user_id])

  #   render json: { errors: ['Not authorized'] }, status: :unauthorized unless @current_user
  # end

  # def render_unprocessable_entity_response(exception)
  #   render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  # end

  # def admin_authorize
  # admin = session[:is_admin]
  # return if admin

  # (render json: { errors: ['This user does not have admin-level privileges.'] }, status: :unauthorized)
  # end
end
