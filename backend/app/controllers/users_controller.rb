class UsersController < ApplicationController

# Skip authentication for signup and logout
skip_before_action :require_authentication, only: [:create, :new, :logout]
# Skip authentication for index action in test environment
skip_before_action :require_authentication, only: [:index], if: -> { Rails.env.test? }

# GET /userscl
  def index
    @users = User.all
      render json: @users, status: :ok
  end

    # POST /signup
   def new
    @user = User.new 
    end

    # POST /signup
    def create
        @user = User.new(user_params)
        if @user.save
            render json: { message: 'User created successfully', user: safe_user(@user) }, status: :created
        else
            render json: { message: "could not do the sign up" }, status: :unprocessable_entity
        end
    end

    # DELETE /logout
    def logout
        reset_session
        render json: { message: 'Logged out' }, status: :ok
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