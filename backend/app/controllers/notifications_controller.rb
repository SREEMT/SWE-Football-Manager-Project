class NotificationsController < ApplicationController
  before_action :authenticate_user!         # Check if user is authenticated
  before_action :set_notification, only: [:update, :destroy]

  # Index user
  def index
  end

  # Update notification rendering based on params
  def update    
  end

  # Destroy notification
  def destroy
  end

  private

  # Set notification to current user
  def set_notification
  end

  # paramaters for notification with read boolean
  def notification_params
  end
end
