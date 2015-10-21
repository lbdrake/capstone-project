class Api::TodolistsController < ApplicationController
  def create
    @todolist = ToDoList.new(todolist_params)
    if @todolist.save
      render json: @todolist
    else
      render json: @todolist.errors.full_messages, status: 422
    end
  end

  private
  def todolist_params
    params.require(:todolist).permit(:project_id, :title)
  end
end
