class UsersController < ApplicationController
  include Authentication
  before_action :authenticated?

  # PATCH/PUT for updating user info
  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: current_user.errors, status: :uprocessable_entity
    end
  end

  # DELETE user
  def destroy
    # Verify its the right user help from ChatGPT
    unless current_user.id == params[:id].to_i
      return render json: { error: "Unauthorized" }, statsus: :Unauthorized
    end

    # Destroy user after checking
    if current_user.authenticate.by(params[:password])
      current_user.destroy
      logout
      head :no_content
    end
  end

  # Add verify password
  # POST users/password_verify
  def password_verify
    if current_user.authenticate_by(params[:password])
      render json: { message: "PAssword Verified" }, status: :ok
    else
      render json: { message: "Wrong Password" }, status: :Unauthorized
    end
  end


  private
  def user_params #parameters for user signup
    params.require(:user).permit(
      :email_address,
      :password,
      :phone_number,
      :first_name,
      :last_name,
      :date_of_birth,
      :role
      )
  end
end