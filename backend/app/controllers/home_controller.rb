# Circumvented ApplicationController to avoid authentication to view coverage report

class HomeController < ActionController::Base
  layout false

  def index
    render template: 'home/index'
  end
end
