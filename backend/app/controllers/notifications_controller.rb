class NotificationsController < ApplicationController
  include Authentication
  before_action :authenticated?         # Check if user is authenticated
  before_action :set_notification, only: [:update, :destroy]

  # Index user and GET /notifications
  def index
    render json: Current.user.notifications.recent
  end

  # Update notification rendering based on params
  # PATCH/PUT
  def update 
    if @notification.update(notification_params)
      render json: @notification
    else
      render json: @notification.errors, status: :uprocessable_entity
    end
  end

  # Destroy notification
  # DELETE
  def destroy
    @notification.destroy
    head :no_content
  end

  private

  # Set notification to current user
  def set_notification
    @notification = Current.user.notifications.find(params[:id])
  end

  # paramaters for notification with read boolean
  def notification_params
    params.require(:notification).permit(:read)
  end
end
