class Api::ProjectsController < ApplicationController
  before_action :require_sign_in

  def index
    @projects = Project.projects_for_user_id(current_user.id).includes({todolists: :tasks}).includes(:shared_users)
    render :index
  end

  def create
    @project = current_user.projects.new(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.projects_for_user_id(current_user.id).includes({todolists: :tasks}).find(params[:id])
    render :show
  end

  def new
    @project = Project.new
  end

  def update
    @project = Project.find_by_id(params[:id])
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find_by_id(params[:id])
    if @project.destroy
      render json: @project
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  private
  def project_params
    params.require(:project).permit(:title, :description)
  end
end
