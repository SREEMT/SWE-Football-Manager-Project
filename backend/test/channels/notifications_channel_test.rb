require "test_helper"

class NotificationsChannelTest < ActionCable::Channel::TestCase
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

  # subscribe user to channel
  test "Subsscire and stream to user" do
    stub_connection current_user: @user

    subscribe
    assert subscription.confirmed?
    assert_has_stream_for @user
  end

  test "Broadcast notification to the right user" do
    stub_connection current_user: @user
    subscribe
    notification = @user.notifications.create!(
      title: "Broadcasted",
      body: "Hi, from Redis",
      read: false,
      notification_type: "test"
    )

    # Broadcast notif
    NotificationsChannel.broadcast_to(@user, notification.as_json)
    assert_broadcast_on(@user, notification.as_json)
  end
end