class Notification < ApplicationRecord
  belongs_to :user
  scope :unread, -> { where(read: false) }          # Boolean that checks if notification was read
  scope :recent, -> { order(created_at: :desc) }    # Order notifications by creation date

  after_create_commit -> { broadcast_to_user } 

  # Method to broadcast necessary data from the db
  private
  def broadcast_to_user
    NotificationsChannel.broadcast_to(user, {
      id: id,
      title: title,
      body: body,
      read: read,
      created_at: created_at
    })
  end
end
