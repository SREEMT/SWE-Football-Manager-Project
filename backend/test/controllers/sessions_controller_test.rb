
  # TO DO:
  # - Return curr user when logged in
  # - Achieve 100% coverage for authentication.rb and session_controller.rb
  # - Fix log out success test to hit last two lines


require "test_helper"

class SessionsControllerTest < ActionDispatch::IntegrationTest
  
  # Setup for test cases for session controller, handles auth
  setup do
    @user = User.create!(
      email_address: "test@example.org", 
      password: "s3cr3t", 
      first_name: "First", 
      last_name: "Last", 
      phone_number: "123456789", 
      role: 3, 
      date_of_birth: "2003-10-31")
  end

  test "log in with valid email & pass" do
    # Fails if session connection fails due to failed login
    post "/session", params: { email_address: @user.email_address, password: "s3cr3t" }
    assert_response :success

    # Makes sure that the test sends correct data
    json = JSON.parse(response.body)
    assert_equal @user.email_address, json["user"]["email"]

    # Fails if a session is not created
    refute_empty response.cookies
  end

  test "Invalid credential rejection" do
    # Test passes if unauthorized access is returned
    post "/session", params: {email_address: @user.email_address, password: "test"}
    assert_response :unauthorized

    # Checks if the controller sends the correct error message
    json = JSON.parse(response.body)
    assert_equal "Invalid email or password", json["error"]
  end

  test "logs out successfully" do
    # Login and check if login is success, fails if not
    post "/session", params: { email_address: @user.email_address, password: "s3cr3t" }
    assert_response :success

    # Delete session and it should terminate session and return :no_content
    delete "/session"
    assert_response :no_content
  end

  # Return current logged in user session for validation
  # FIX THIS
=begin
  test "Return curr user logged in" do
    post "/session", params: {email_address: @user.email_address, password: "s3cr3t"}
    @cookie = response.headers["Set-Cookie"]

    get "/session", headers: { "Cookie" => @cookie }

    assert_response :success
    json = JSON.parse(response.body)
    assert_equal @user.email_address, json["user"]["email"]
  end
=end
end