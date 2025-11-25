require "test_helper"

class PasswordsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(
      email_address: "david1999@gmail.com", # match your actual DB column
      password: "mypasword333",
      role: 1,
      first_name: "John",
      last_name: "Doe",
      phone_number: "5555555555",
      date_of_birth: "2012-01-01"
    )
  end

  test "POST /passwords with valid email sends reset instructions" do
    post passwords_url, params: { email_address: @user.email_address }, as: :json
    assert_response :success
    json = JSON.parse(response.body)
    assert_equal "OTP sent to your email.", json["message"]
    assert_not_nil @user.generate_password_reset_token
  end

    test "PATCH /passwords/:token resets password with valid token" do
    token = @user.generate_password_reset_token
    patch password_url(token: token),
            params: { password: "newpassword", password_confirmation: "newpassword" },
            as: :json
    assert_response :ok
    json = JSON.parse(response.body)
    assert_equal "Password has been reset.", json["message"]
  end

  test "PATCH /passwords/:token with mismatched confirmation returns error" do
    token = @user.generate_password_reset_token
    patch password_url(token: token),
            params: { password: "newpassword", password_confirmation: "differentpassword" },
            as: :json
    assert_response :not_acceptable
    json = JSON.parse(response.body)
    assert_includes json["message"], "Password did not match"
  end


  test "POST /passwords with invalid email returns error" do
    post passwords_url, params: { email_address: "invalid@example.com" }, as: :json
    assert_response :not_found
    json = JSON.parse(response.body)
    assert_includes json["error"], "Email not found"
  end

    test "PATCH /passwords/:token with invalid token returns error" do
    patch password_url(token: "invalidtoken"),
            params: { password: "newpassword", password_confirmation: "newpassword" },
            as: :json
    assert_response :unprocessable_entity
    json = JSON.parse(response.body)
    assert_includes json["message"], "Password reset link is invalid or has expired"   
    end 
end