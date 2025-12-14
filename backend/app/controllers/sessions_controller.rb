class SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[ new create ]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_url, alert: "Try again later." }

  def new
  end
  
  def create
    if user = User.authenticate_by(params.permit(:email_address, :password))
      start_new_session_for user
      # redirect_to after_authentication_url
      render json: {
        message: "Login Success",
        user: {
          id: user.id,
          email: user.email_address
        }
      }, status: :ok
    else
      # redirect_to new_session_path, alert: "Try another email address or password."
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  def show
    if current_user
      render json: current_user
    else
      render json: { error: "Not logged in" }, status: :unauthorized
    end
  end

  def destroy
    terminate_session
    # redirect_to new_session_path
    head :no_content
  end

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
end
