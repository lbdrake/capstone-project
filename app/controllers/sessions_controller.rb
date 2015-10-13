class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user
      signin(@user)
      redirect_to root_url
    else
      flash[:errors] = ["Incorrect Username/Password combo, please try again"]
      redirect_to new_session_url
    end
  end

  def destroy
    signout
    redirect_to new_session_url
  end

  private
  def session_params
    params.require(:users).permit(:username, :password)
  end
end
