Rails.application.routes.draw do
  root to: 'sessions#new'
  resources :users
  resource :session

  namespace :api, defaults: {format: :json} do
    resources :projects
  end
end
