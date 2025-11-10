require "test_helper"

class NotificationsControllerTest < ActionDispatch::IntegrationTest

  # Setup for test cases for Notifications, handles auth
  # Seed data
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
    
    @notification = @user.notifications.create!(
      title: "Test Notif",
      body: "Hello",
      read: false,
      notification_type: "info"
    )
  end

  # Create notification and set to user from api
  test "Create notification and set to user" do
    @user.notifications.create!(
      title: "Another test",
      body: "Created by API",
      read: false,
      notification_type: "info"
    )

    get "/notifications", headers: { "Cookie" => @cookie}
    assert_response :success

    json = JSON.parse(response.body)
    titles = json.map{ |n| n["title"] }
    assert_includes titles, "Another test"      # Verifies if created notif is there 
  end

  # Retrieve notifications through ActionCable
  test "Retrieve notifications and stream to user" do
    get "/notifications", headers: {"Cookie" => @cookie}
    assert_response :success

    json = JSON.parse(response.body)
    assert_kind_of Array, json
    assert_equal @notification.title, json.first["title"]
  end

  # Delete notifications
  test "Should delete a notification" do
    assert_difference "@user.notifications.count", -1 do
      delete "/notifications/#{@notification.id}", headers: {"Cookie" => @cookie}
    end
    assert_response :no_content
    assert_not Notification.exists?(@notification.id)
  end

  # Mark notification as read
  test "Should update notification to read" do
    patch  "/notifications/#{@notification.id}",
      params: { notification: { read: true} },
      headers: {"Cookie" => @cookie}
    
    assert_response :success
    @notification.reload
    assert @notification.read
  end
  # Update notification
end
