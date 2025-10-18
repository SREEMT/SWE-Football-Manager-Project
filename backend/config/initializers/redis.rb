# Load configuration from a YAML file for better environment management
redis_config = Rails.application.config_for(:redis)
REDIS = Redis.new(url: redis_config['url'])