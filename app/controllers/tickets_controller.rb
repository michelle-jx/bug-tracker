class TicketsController < ApplicationController
  def index
    tickets = Ticket.all
    render json: tickets, status: :ok
  end

  def create
    ticket = Ticket.create(ticket_params)
    render json: ticket, status: :created
  end

  private

  def ticket_params
    params.permit(:status, :priority, :issue)
  end
end
