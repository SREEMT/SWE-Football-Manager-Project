require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @valid_user_params = {
      user: {
        email_address: "david2009@gmail.com",
        password: "mypassword",
        phone_number: "5553457890",
        first_name: "David",
        last_name: "Osayi",
        date_of_birth: "1999-07-25",
        role: 1
      }
    }

    @invalid_user_params = {
      user: {
        email_address: "",
        password: "short",
        phone_number: "",
        first_name: "",
        last_name: "",
        date_of_birth: "",
        role: ""
      }
    }
  end

=begin test "should get index and return all users" do
  get users_url, as: :json
  assert_response :ok
  json = JSON.parse(response.body)
  assert_kind_of Array, json
end
=end 

  test "POST /users with valid parameters creates a user" do
    assert_difference("User.count", 1) do
      post users_url, params: @valid_user_params, as: :json
    end

    assert_response :created
    json = JSON.parse(response.body)
    assert_equal "User created successfully and logged in", json["message"]
    assert_equal "david2009@gmail.com", json["user"]["email_address"]
    assert_nil json["user"]["password_digest"], "Response should not include password_digest"
  end

  test "POST /users with invalid parameters does not create user" do
    assert_no_difference("User.count") do
      post users_url, params: @invalid_user_params, as: :json
    end

    assert_response :unprocessable_entity
    json = JSON.parse(response.body)
    assert_includes json["message"], "could not do the sign up"
  end

=begin  test "DELETE /users/logout resets session" do
    delete "/logout", as: :json
    assert_response :ok
    json = JSON.parse(response.body)
    assert_equal "Logged out", json["message"]
  end
=end

test "POST /users with valid_parameters_are_created_and_logged_in" do
  assert_difference("User.count", 1) do
    post users_url, params: @valid_user_params, as: :json
  end

  assert_response :created
  json = JSON.parse(response.body)
  assert_equal "User created successfully and logged in", json["message"]
  assert_equal "david2009@gmail.com", json["user"]["email_address"]
end
end
