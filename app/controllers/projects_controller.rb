class ProjectsController < ApplicationController
  def index
    projects = Project.all
    render json: projects, status: :ok
  end

  def show
    project = Project.find_by(id: session[:project_id])
    render json: project, status: :ok
  end
end
