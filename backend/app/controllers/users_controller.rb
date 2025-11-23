class UsersController < ApplicationController

# Skip authentication for signup and logout
allow_unauthenticated_access only: %i[new create]

# GET /userscl
=begin  def index
    @users = User.all
      render json: @users, status: :ok
  end
=end

    # POST /signup
   def new
    @user = User.new 
    end

    # POST /signup
    def create
        @user = User.new(user_params)
        if @user.save
            start_new_session_for @user
            render json: { message: 'User created successfully and logged in', user: safe_user(@user) }, status: :created
        else
            render json: { message: "could not do the sign up" }, status: :unprocessable_entity
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

    # Helper method to exclude sensitive fields from user object
    def safe_user(user)
        user.as_json(except: [:password_digest, :created_at, :updated_at])
    end
end