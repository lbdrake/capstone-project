class Api::ProjectSharesController < ApplicationController

  def index
    @projectshares = ProjectShare.findByProjectId(params[:id])
    render :index
  end

  def create
    @projectshare = ProjectShare.new(projectshare_params)
    if @projectshare.save
      render json: @projectshare
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @projectshare = ProjectShare.find(params[:id])
    render :show
  end

  def destroy
    @projectshare = ProjectShare.find(params[:id])
    if @projectshare.destroy
      render json: {}
    else
      render json: @projectshare.errors.full_messages, status: 422
    end
  end

  private
  def projectshare_params
    params.require(:projectshare).permit(:project_id, :shared_user_id)
  end
end
