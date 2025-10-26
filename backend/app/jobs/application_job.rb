class ApplicationJob < ActiveJob::Base
  # Automatically retry jobs that encountered a deadlock
  # retry_on ActiveRecord::Deadlocked

  # Most jobs are safe to ignore if the underlying records are no longer available
  # discard_on ActiveJob::DeserializationError


  # ENABLE FOR REDIS USER SESSIONS
  # config.api_only = false
  # config.session_store :cookie_store, key: '_your_app_session'
  # onfig.middleware.use ActionDispatch::Cookies
  # config.middleware.use config.session_store, config.session_options
end
