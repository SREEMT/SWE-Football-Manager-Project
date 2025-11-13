Rails.application.routes.draw do
   mount ActionCable.server => "/cable"           # Redis connection

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resource :session, only: [:new, :create, :destroy]
  resources :passwords, only: [:new, :create, :edit, :update], param: :token
  resources :users, only: [:update, :destroy] do
    collection do
      post :password_verify
    end
  end
  # resource :session
  # resources :passwords, param: :token
  resources :notifications, only: [:index, :update, :destroy]
  
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  get "home/index"          # Getting coverage report home page
  root 'home#index'     # Home page that shows coverage report if
end
