class TicketsController < ApplicationController
  def index
    tickets = Ticket.all
    render json: tickets, status: :ok
  end

  def create
    project = Project.create(title: params[:title])
    ticket = Ticket.create(priority: params[:priority], issue: params[:issue], author: session[:user_name], user_id: session[:user_id], project_id: project.id)
    render json: project, status: :created, include: :ticket
  end

  def show
    ticket = Ticket.find_by(id: params[:id])
    render json: ticket, status: :ok
  end

  def destroy
    ticket = Ticket.find_by(id: params[:id])
    ticket.destroy
    render json: no_content
  end

  def destroy
    ticket = Ticket.find_by(id: params[:id])
    ticket.update
  end

  # private

  # def ticket_params
  # params.permit(:status, :priority, :issue)
  # end
end
