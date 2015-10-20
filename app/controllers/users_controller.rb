class UsersController < ApplicationController
  before_action :require_sign_in
  
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      signin(@user)
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
