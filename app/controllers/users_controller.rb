class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @project_data = ({title: "Discover TaskMaster", description: "Take a quick feature tour"})
    @todolist1_data = ({title: "Check Out The Features of TaskMaster"})
    @todolist2_data = ({title: "Create Your Own Project"})
    @task1_data = ({title: "This task is overdue! Let's check it off", description: "Tasks that have past their due date will appear red until completed", duedate: "2015-09-09"})
    @task2_data = ({title: "Check out the My Tasks page to view tasks assigned to you", duedate: "2015-09-10"})
    @task3_data = ({title: "Create your first project!", description: "Each team member needs their own account and then you can share your Project with other users", duedate: "2016-01-01"})
    if @user.save
      signin(@user)
      @new_project = @user.projects.create(@project_data)
      @new_todolist1 = @new_project.todolists.create(@todolist1_data)
      @new_todolist2 = @new_project.todolists.create(@todolist2_data)
      @new_task1 = @new_todolist1.tasks.create!(@task1_data.merge({author_id: current_user.id, assigned_user_id: current_user.id}))
      @new_task2 = @new_todolist1.tasks.create!(@task2_data.merge({author_id: current_user.id, assigned_user_id: current_user.id}))
      @new_task3 = @new_todolist2.tasks.create!(@task3_data.merge({author_id: current_user.id, assigned_user_id: current_user.id}))
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
