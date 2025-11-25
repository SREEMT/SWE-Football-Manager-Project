class UsersController < ApplicationController
  allow_unauthenticated_access only: %i[new create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      start_new_session_for(@user) # optional auto-login
      render json: {
        message: "User created successfully",
        user: safe_user(@user)
      }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    # Don't permit :role here!
    params.require(:user).permit(
      :email_address,
      :password,
      :password_confirmation,
      :first_name,
      :last_name,
      :phone_number,
      :date_of_birth
    )
  end

  def safe_user(user)
    user.as_json(only: [:id, :email_address, :first_name, :last_name])
  end
end
