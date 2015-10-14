class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
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
    @project = Project.find_by_id(params[:id])
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
