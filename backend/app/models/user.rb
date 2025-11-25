class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  has_many :notifications, dependent: :destroy

  normalizes :email_address, with: ->(e) { e.strip.downcase }

  enum :role, { admin: 0, user: 1, guest: 2, manager: 3 }

  # Ensures this credentials are present and valid
  validates :email_address, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone_number, presence: true
  validates :date_of_birth, presence: true

  # Generates a unique password reset token and sets the sent time
  def generate_password_reset_token
    token = SecureRandom.urlsafe_base64
    update(
      password_reset_token: token,
      password_reset_sent_at: Time.current
    )
    token # Return the generated token
  end 
  
end
