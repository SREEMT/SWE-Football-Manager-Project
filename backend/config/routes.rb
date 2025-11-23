Rails.application.routes.draw do
  get "home/index"          # Getting coverage report home page
  root 'home#index'     # Home page that shows coverage report if

  resource :session, only: [:new, :create, :destroy]
  resources :passwords, only: [:new, :create, :edit, :update], param: :token
  resources :users, only: [:new, :create]
  #  elete "/logout", to: "users#logout"
  resources :notifications, only: [:index, :update, :destroy]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  mount ActionCable.server => "/cable"
  
end
