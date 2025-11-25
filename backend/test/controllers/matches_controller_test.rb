require "test_helper"

class MatchesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(
      email_address: "test@example.org", 
      password: "s3cr3t", 
      first_name: "First", 
      last_name: "Last", 
      phone_number: "123456789", 
      role: 3, 
      date_of_birth: "2003-10-31")
    post "/session", params: { email_address: @user.email_address, password: "s3cr3t"}
    @cookie = response.headers["Set-Cookie"]
    
    @match = matches(:one)
    @valid_params = {
      match: {
      location: "MyString",
      match_date: "2025-11-23",
      match_time: "2025-11-23 16:52:28",
      match_type: 1,
      players: { "Alice" => 1, "Bob" => 1, "Charlie" => 2 },
      score1: 1,
      score2: 1,
      team1: "MyString",
      team2: "MyString"
      }
    }
  end

  test "should get index" do
    get matches_url, as: :json
    assert_response :success
  end

  test "should create match" do
    assert_difference("Match.count") do
      post matches_url, params: @valid_params, as: :json
    end

    assert_response :created
  end

  test "should show match" do
    get match_url(@match), as: :json
    assert_response :success
  end

  test "should update match" do
    patch match_url(@match), params: @valid_params, as: :json
    assert_response :success
  end

  test "should destroy match" do
    assert_difference("Match.count", -1) do
      delete match_url(@match), as: :json
    end

    assert_response :no_content
  end
end
