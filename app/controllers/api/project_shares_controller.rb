class Api::ProjectSharesController < ApplicationController

  def index
    @projectshares = ProjectShare.findByProjectId(params[:id])
    render :index
  end

  def create
    @projectshare = ProjectShare.new(projectshare_params)
    if @projectshare.save
      render @projectshare
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @projectshare = ProjectShare.find(params[:id])
    render :show
  end

  private
  def projectshare_params
    params.require(:projectshare).permit(:project_id, :shared_user_id)
  end
end
