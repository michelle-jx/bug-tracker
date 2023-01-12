class ProjectsController < ApplicationController
  def index
    projects = Project.all
    render json: projects, status: :ok
  end

  def show
    project = Project.find_by(title: params[:title])
    render json: project, status: :ok
  end
end
