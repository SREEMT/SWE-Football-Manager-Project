require "test_helper"

class MatchesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @match = matches(:one)
  end

  test "should get index" do
    get matches_url, as: :json
    assert_response :success
  end

  test "should create match" do
    assert_difference("Match.count") do
      post matches_url, params: { match: { location: @match.location, match_date: @match.match_date, match_time: @match.match_time, match_type: @match.match_type, players: @match.players, score1: @match.score1, score2: @match.score2, team1: @match.team1, team2: @match.team2 } }, as: :json
    end

    assert_response :created
  end

  test "should show match" do
    get match_url(@match), as: :json
    assert_response :success
  end

  test "should update match" do
    patch match_url(@match), params: { match: { location: @match.location, match_date: @match.match_date, match_time: @match.match_time, match_type: @match.match_type, players: @match.players, score1: @match.score1, score2: @match.score2, team1: @match.team1, team2: @match.team2 } }, as: :json
    assert_response :success
  end

  test "should destroy match" do
    assert_difference("Match.count", -1) do
      delete match_url(@match), as: :json
    end

    assert_response :no_content
  end
end
