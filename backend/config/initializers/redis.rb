# Load configuration from a YAML file for better environment management

redis_config = Rails.application.config_for(:redis)
REDIS = Redis.new(url: redis_config[:url])

# ENABLE FOR USER CACHING WITH REDIS
# Rails.application.config.session_store :cache_store
# Rails.application.config.cache_store = :redis_cache_store, {
#   url: redis_config[:url],
#   expires_in: 90.minutes
# }
