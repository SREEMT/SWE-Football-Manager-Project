class PasswordsController < ApplicationController
  allow_unauthenticated_access
  before_action :set_user_by_token, only: %i[ edit update ]

  def new
  end

  def create
    if user = User.find_by(email_address: params[:email_address])
      PasswordsMailer.reset(user).deliver_later
    end

    redirect_to new_session_path, notice: "Password reset instructions sent (if user with that email address exists)."

    
    if user
      otp = rand(100000..999999).to_s  # Generate 6-digit OTP
      user.update(reset_otp: otp, otp_sent_at: Time.current)

      # Send OTP email asynchronously
      PasswordsMailer.with(user:, otp:).send_otp.deliver_later

      render json: { message: "OTP sent to your email." }, status: :ok
    else
      render json: { error: "Email not f ound." }, status: :not_found
    end
  end

  end

  def edit
  end

  def update
    if @user.update(params.permit(:password, :password_confirmation))
      redirect_to new_session_path, notice: "Password has been reset."yu
    else
      redirect_to edit_password_path(params[:token]), alert: "Passwords did not match."
    end
  end

  private
    def set_user_by_token
      @user = User.find_by_password_reset_token!(params[:token])
    rescue ActiveSupport::MessageVerifier::InvalidSignature
      redirect_to new_password_path, alert: "Password reset link is invalid or has expired."
    end
end
