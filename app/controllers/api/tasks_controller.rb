class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params.merge({author_id: current_user.id}))
    if @task.save
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = Task.findByAssignedUser(current_user.id)
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :duedate, :todolist_id, :completed, :assigned_user_id )
  end
end
