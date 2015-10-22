class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params.merge({author_id: current_user.id}))
    if @task.save
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :duedate, :todolist_id )
  end
end
