class PasswordsController < ApplicationController
  allow_unauthenticated_access
  before_action :set_user_by_token, only: %i[ edit update ]

  def new
  end

  def create
  user = User.find_by(email_address: params[:email_address])
    # redirect_to new_session_path, notice: "Password reset instructions sent (if user with that email address exists)."

    if user
       puts "===> Found user #{user.email_address}"
      render json: { message: "OTP sent to your email." }, status: :ok
      token = user.generate_password_reset_token
    else
       puts "===> No user found for #{params[:email_address]}"
      render json: { error: "Email not found." }, status: :not_found
    end
  end

  def edit
  end

  def update
   if @user.update(params.permit(:password, :password_confirmation))
    render json: { message: "Password has been reset." }, status: :ok
    # redirect_to new_session_path, notice: "Password has been reset."
    else
    # redirect_to edit_password_path(params[:token]), alert: "Passwords did not match."
    render json: { message: "Password did not match." }, status: :not_acceptable
   end
  end



  private
    def set_user_by_token
      @user = User.find_by(password_reset_token: params[:token])
   
      # Check if token is valid and not expired (15 minutes validity)
      if @user.nil? || @user.password_reset_sent_at < 15.minutes.ago
      render json: { message: "Password reset link is invalid or has expired" }, status: :unprocessable_entity
      # redirect_to new_password_path, alert: "Password reset link is invalid or has expired."
      end 
    end
end