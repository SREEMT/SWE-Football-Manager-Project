class NotificationsChannel < ApplicationCable::Channel
  def subscribed
    steam_for current_user
  end
end