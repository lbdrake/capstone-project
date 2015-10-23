class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @project_data = ({title: "Discover TaskMaster", description: "Take a quick feature tour"})
    @todolist_data = ({title: "Add a to do list"})
    @task_data = ({title: "Click the checkbox to mark as complete"})
    if @user.save
      signin(@user)
      @new_project = @user.projects.create(@project_data)
      @new_todolist = @new_project.todolists.create(@todolist_data)
      @new_tasks = @new_todolist.tasks.create!(@task_data.merge({author_id: current_user.id, assigned_user_id: current_user.id}))
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    @users = User.findAllUsernames
    render json: @users
  end

  private
  def user_params
    params.require(:users).permit(:username, :password)
  end
end
